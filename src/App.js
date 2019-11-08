import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Tabs from './components/tabs/Tabs';

let tabs = [
  {
    id: 'tab-1',
    title: 'Home',
    content: `Harry Potter spends the summer with
    The Dursleys without receiving letters from his
    Hogwarts friends. In his room, Harry meets Dobby, a
    house-elf who warns him of a peril that will take shape
    if he returns to Hogwarts. Dobby reveals that he intercepted his
    friends letters, and destroys a cake in order to prevent his return
    to school. The Dursleys lock Harry up, but Ron Weasley and his older twin
    brothers, Fred and George, rescue him in their fathers flying Ford Anglia.
    While purchasing school supplies, Harry and the Weasley family encounter Rubeus
    Hagrid and Hermione Granger. They attend a book-signing by celebrity wizard Gilderoy
    Lockhart, who announces that he will be the new Defence Against the Dark Arts teacher.
    During a small confrontation with Draco Malfoy, Harry meets Malfoy's father, Lucius, who
    discreetly slips a book into Ginny Weasley's belongings, which only Harry notices, but he
    mentions this to no one. When Harry and Ron are blocked from entering Platform Nine and
    Three-Quarters, they fly to Hogwarts in the flying car. They crash into the Whomping
    Willow upon arrival, and Ron's wand is broken. Both boys narrowly avoid expulsion when
    Professor McGonagall gives them detention.`
  },
  {
    id: 'tab-2',
    title: 'Profile',
    content: `During a Quidditch game, Harry's arm is
    broken by a Bludger and then he is visited by Dobby in the infirmary and he tells
    Harry that he was the one who closed the portal to Platform 9 3/4 and he was also
    the one who made the Bludger chase after Harry, in an attempt to get Harry to leave
    the school. When Harry communicates with a snake, the school believes he is the Heir.
    On Christmas Day, Harry and Ron learn that Malfoy is not the Heir, but Malfoy mentions
    his father told him that a muggle-born girl died when the Chamber was last opened fifty
    years ago. Harry finds an enchanted diary owned by former Hogwarts student Tom Riddle,
    which contains a flashback fifty years prior where Riddle accused Hagrid, then a student,
    of opening the Chamber. When the diary is stolen and Hermione is petrified, Harry and Ron
    question Hagrid. Professor Dumbledore, Cornelius Fudge, and Lucius come to take Hagrid to
    Azkaban, but he discreetly tells the boys to "follow the spiders". In the Forbidden Forest,
    Harry and Ron meet Hagrid's giant pet spider, Aragog, who reveals Hagrid's innocence and
    provides them a small clue about the Chamber's monster.`
  },
  {
    id: 'tab-3',
    title: 'Contact',
    content: `A book page in Hermione's hand identifies the monster
    as a basilisk, a giant serpent that instantly kills those that make direct eye contact with it;
    the petrified victims only saw it indirectly. The school staff learn that Ginny was taken into the
    Chamber, and convince Lockhart to save her. Harry and Ron find Lockhart, exposed as a fraud, planning
    to flee; knowing Myrtle was the girl the Basilisk killed, they take him to the bathroom and find the
    Chamber's entrance. Once inside, Lockhart uses Ron's broken wand against them, but it backfires, wipes
    his memory, and causes a cave-in. Harry enters the Chamber alone and finds Ginny unconscious, guarded
    by Riddle. Riddle reveals that he used the diary to manipulate Ginny and reopen the Chamber.
    When Riddle creates the anagram for his future new identity, "I am Lord Voldemort", Harry realises
    that Riddle himself is Slytherin's heir and Voldemort's true identity. After Harry expresses support
    for Dumbledore, Fawkes flies in with the Sorting Hat, causing Riddle to summon the Basilisk. Fawkes
    blinds the Basilisk, allowing Harry to look at it directly without being killed or petrified.
    The Sorting Hat eventually produces the Sword of Gryffindor, with which Harry battles and slays the
    Basilisk, though he is injured by one of its fangs.`
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '',
    }
  }

  componentDidMount() {
    const active = sessionStorage.getItem('activeTab');
    this.setState({ activeTab: active })
  }

  componentDidUpdate() {
    sessionStorage.setItem('activeTab', this.state.activeTab)
  }

  onTabSelected = (id) => {
    this.setState(() => ({ activeTab: id }));
  }

  resetActiveTab = () => {
    this.setState({ activeTab: '' })
  }

  render() {

    return (
      <>
        <div className="wrapper">
          <Link to="/" className="link">Home</Link>
          <Link to="/tabs" className="link" onClick={this.resetActiveTab}>TabsPage</Link>
        </div>
        <Switch>
          <Route path="/tabs" render={({ match }) => (
            <Tabs
              tabs={tabs}
              match={match}
              selectTab={this.onTabSelected}
              activeTab={this.state.activeTab}
            />
            )}
          />
        </Switch>
      </>
    )
  }
}

export default App;
