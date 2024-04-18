export class Feedback {
    id?: number | undefined;
    rating: number | undefined;
    movieName!: string ;
    hashtag: string | undefined;
    feedback: string | undefined;

    constructor( rating: number | undefined,
        movieName: string,
        hashtag: string | undefined,
        feedback: string | undefined
    ) {
        this.rating = rating
        this.movieName = movieName
        this.hashtag = hashtag
        this.feedback = feedback
    }
}
