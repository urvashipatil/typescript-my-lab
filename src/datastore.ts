interface DataEntity{
  id: string
}

interface Movie extends DataEntity{  
  director: string
}

interface Song extends DataEntity{  
  singer: string
}

interface Comic extends DataEntity{
  issuNumber: number
}

type DataEntityMap={
  movie: Movie,
  // song: Song,
  // comic: Comic
}

type MethodTypes= "add" | "get" | "getAll" | "clear";

// type IDataStore = {
//   [K in keyof DataEntityMap as `${MethodTypes}${Capitalize<K>}`]: () => DataEntityMap[K];
// }


type IDataStore = {
    [K in keyof DataEntityMap as `get${Capitalize<K>}`]: (id: string)=> DataEntityMap[K]
} & {
  [K in keyof DataEntityMap as `getAll${Capitalize<K>}s`]: ()=> DataEntityMap[K][]
}
& {
  [K in keyof DataEntityMap as `clear${Capitalize<K>}s`]: ()=> void
}& {
  [K in keyof DataEntityMap as `add${Capitalize<K>}`]: (arg: DataEntityMap[K])=> void
}

type MappedData = {
    [K in keyof DataEntityMap]: Record<string, DataEntityMap[K]>
  };

class DataStore implements IDataStore{ 

  #data: MappedData= {
    movie: {}    
   }
   
  // data = {
  //   movie: {"1": {id: "1",director:"abc"},
  //           "2": {id:"2", director:"next"}
  //         },
  //   song: {"1": {id: "1",singer:"abc"},
  //          "2": {id:"2", singer:"next"}
  //   },
  //   comic:{"1": {id: "1",issueNumber:11},
  //          "2": {id:"2", issueNumber:22}
  //   }
  // }

  getAllMovies(){
    
    return Object.keys(this.#data.movie).map((o)=>{
      return this.#data.movie[o]
    }) 
  }

  addMovie(m: Movie){
    this.#data.movie[m.id]= m;
  }


  getMovie(id: string) {
      return this.#data.movie[id];
  }

  clearMovies(){
    this.#data.movie={};
  }
}



const ds = new DataStore()
// ds.addSong({ id: "song-123", singer: "The Flaming Lips" })
ds.addMovie({
  id: "movie-456",
  director: "Stephen Spielberg",
})
// ds.getSong("song-123") // returns the song
ds.getMovie("movie-456") // returns the movie
// ds.getAllSongs() // array of all songs
// ds.getAllMovies() // array of all movies
// ds.clearSongs() // clears all songs
ds.clearMovies() // clears all movies