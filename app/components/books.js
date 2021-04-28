import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BooksComponent extends Component {
  tBooks = ["Code: The Hidden Language of Computer Hardware and Software", "Learn You a Haskell for Great Good!	", "Kotlin for Android Developers","The Neophyte's Guide to Scala"]
  fBooks = ["The Great Gatsby", "The Road", "All Quiet on the Western Front","Dune","A Song of Ice and Fire","The Death of Ivan Ilyich", "The Hobbit", "Persepolis","A Visit from the Goon Squad", "Philadelphia, Here I Come! (Play)"]
  sBooks = ["Open: Book by Andre Agassi", "Champagne Football: John Delaney and the Betrayal of Irish Football: The Inside Story"]
  dBooks = ["The Life-Changing Magic of Tidying: Marie Kondo"]
  hBooks = ["Forty Ways to Look at Winston Churchill: A Brief Account of a Long Life", "Crimea", "The Anarchy : The Relentless Rise of the East India Company"]
}
