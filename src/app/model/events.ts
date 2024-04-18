export class Event {
    eventId?: number;
    eventName: string | null | undefined;
    language: string | null | undefined;
    city: string | null | undefined;
    genre: string | null | undefined;
    duration: number | undefined;
    releaseDate: string | null | undefined;
    price: number | undefined;
    eventPosterUrl: string | null | undefined;
    artist: string | null | undefined;
    artistUrl: string | null | undefined;
    description: string | null | undefined;

    constructor(eventName: string | null | undefined, language: string | null | undefined, 
        city: string | null | undefined, genre: string | null | undefined,
        duration: number | undefined, releaseDate: string | null | undefined,
        price: number | undefined, eventPosterUrl: string | null | undefined,
        artist: string | null | undefined, artistUrl: string | null | undefined,
        description: string | null | undefined) {
        this.eventName = eventName;
        this.language = language;
        this.city = city;
        this.genre = genre;
        this.duration = duration;
        this.releaseDate = releaseDate;
        this.price = price;
        this.eventPosterUrl = eventPosterUrl;
        this.artist = artist;
        this.artistUrl = artistUrl;
        this.description = description;
    }
}
