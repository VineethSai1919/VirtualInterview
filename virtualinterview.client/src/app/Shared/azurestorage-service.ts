import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BlobClient, BlobServiceClient, BlockBlobClient, BlockBlobUploadOptions, ContainerClient } from '@azure/storage-blob';
@Injectable({
  providedIn: 'root'
})
export class AzurestorageService {
  progress: number = 0;

  sas = "?sv=2023-11-03&se=2023-11-29T09%3A14%3A42Z&sr=c&sp=w&sig=hkR%2B0EJsfOvGno03PDFEL5nQc2%2FiBIFXNRmqnDKwPCg%3D";

  constructor() { }
  private uploadFileProgress = new Subject<{ loadedBytes: number; totalBytes?: number }>();
  private uploadFolderProgress = new Subject<{ loadedBytes: number; totalBytes?: number }>();

  fileUploadProgress(loadedBytes: number, totalBytes?: number): void {
    const progress = { loadedBytes, totalBytes };
    this.uploadFileProgress.next(progress);
  }

  getUploadFileProgress() {
    return this.uploadFileProgress.asObservable();
  }


  async fileUpload(file: any, contextType?: string, name?: string, sas?: string): Promise<any> {
    let link;
    this.progress = 1;
    const uploadOptions: any = {
      onProgress: (ev: any) => {
        this.fileUploadProgress(ev.loadedBytes, file.size);
      }
    };

    const blobName = name ?? "";
    const containerClient = new ContainerClient(sas ?? "");

    try {
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      const uploadResponse = await blockBlobClient.uploadData(file, {
        blobHTTPHeaders: { blobContentType: contextType },
        onProgress: (progress) => {
          this.uploadFileProgress.next({ loadedBytes: progress.loadedBytes, totalBytes: file.size });
        },
      });

      link = blockBlobClient.url;
    } catch (error) {
      console.error('File upload failed:', error);
    }

    return link;
  }



}


interface CustomProgressEvent {
  loadedBytes: number;
  totalBytes: number;
}
