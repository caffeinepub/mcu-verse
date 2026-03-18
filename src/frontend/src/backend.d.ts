import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Movie {
    title: string;
    cast: Array<string>;
    synopsis: string;
    phase: bigint;
    releaseYear: bigint;
    officialMarvelLink: string;
}
export interface Feedback {
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}
export interface backendInterface {
    addMovie(id: string, movie: Movie): Promise<void>;
    getAllFeedback(): Promise<Array<Feedback>>;
    getAllMovies(): Promise<Array<Movie>>;
    getMovie(id: string): Promise<Movie>;
    submitFeedback(name: string, email: string, message: string): Promise<void>;
}
