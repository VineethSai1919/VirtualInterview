import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

/**
 * Service to manage URLs and IDs for code exercises and challenges.
 */
@Injectable({
  providedIn: 'root'
})
export class UrlService {
  codeExerciseId!: string
  challengeId!: string
  private baseUrl!: string;

  /**
   * Constructor to initialize the base URL.
   * @param baseUrl - The base URL to be used by the service.
   */
  constructor(@Optional() @Inject(new InjectionToken<string>('BASE_URL')) baseUrl?: string) {
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }

  /**
   * Gets the base URL.
   * @returns The base URL as a string.
   */
  public get getBaseURL(): string {
    return this.baseUrl;
  }

  /**
   * Sets the code exercise ID.
   * @param Id - The ID of the code exercise.
   */
  GetCodeExcersieID(Id: string) {
    this.codeExerciseId = Id;
  }

  /**
   * Sets the challenge ID.
   * @param id - The ID of the challenge.
   */
  SetChallengeId(id: string) {
    this.challengeId = id;
  }
}
