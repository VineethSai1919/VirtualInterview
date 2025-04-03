import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiConfiguration } from "./api-configuration";
import { apiSsmlSynthesizeSpeechPost$Json, ApiSsmlSynthesizeSpeechPost$Json$Params } from "./api-ssml-synthesize-speech-post-json";
import { map, Observable } from "rxjs";
import { StrictHttpResponse } from "./strict-http-response";
import { BaseService } from "./base.service";

@Injectable({ providedIn: 'root' })
export class SsmlService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }
  static readonly ApiSsmlSynthesizeSpeechPostPath = '/api/SSML/SynthesizeSpeech';

  apiSsmlSynthesizeSpeechPost$Json(params?: ApiSsmlSynthesizeSpeechPost$Json$Params, context?: HttpContext): Observable<Blob> {
    return this.apiSsmlSynthesizeSpeechPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }
  /**
 * This method provides access to the full `HttpResponse`, allowing access to response headers.
 * To access only the response body, use `apiSsmlSynthesizeSpeechPost$Json()` instead.
 *
 * This method sends `application/*+json` and handles request body of type `application/*+json`.
 */
  apiSsmlSynthesizeSpeechPost$Json$Response(params?: ApiSsmlSynthesizeSpeechPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return apiSsmlSynthesizeSpeechPost$Json(this.http, this.rootUrl, params, context);
  }
}
