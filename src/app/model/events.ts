export class Events {
    eventId?: number | undefined
    eventName: string | undefined | null = ""
    language: string | undefined | null = ""
    city: string | undefined | null = ""
    genre: string | undefined | null = ""
    duration: number | undefined
    releaseDate: string | undefined | null = ""
    price: number | undefined
    eventPosterUrl: string | undefined | null = ""
    artist: string | undefined | null = ""
    artistUrl: string | undefined | null = ""
    description: string | undefined | null = ""

    constructor(eventName: string | undefined | null, language: string | undefined | null, city: string | undefined | null, genre: string | undefined | null, duration: number | undefined, releaseDate: string | undefined | null, price: number | undefined, eventPosterUrl: string | undefined | null, artist: string | undefined | null, artistUrl: string | undefined | null, description: string | undefined | null) {

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
