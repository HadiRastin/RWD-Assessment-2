import { createStore } from 'vuex'
import { auth } from '../firebase/config.js'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

const store = createStore({
    state: {
        user: null,
        authIsReady:false,
        

        posters: [
            { id: 'p1', title: 'Ten simple rules for researchers who want to develop web app', abstract:'Web applications, also known as web apps, are increasingly common in the research communication portfolios of those working in the life sciences and physical sciences. Web apps help disseminate research findings and present research outputs in ways that are accessible and meaningful to the general public—from individuals, to governments, to companies. Specifically, web apps enable exploration of scenario testing and policy analysis (i.e., to answer “what if?”) as well as coevolution of scientific and public knowledge.', authors: ['Sheila M. Saia', 'Natalie G. Nelson', 'Sierra N. Young'], score:4 , comment:[], votedUsers:[]},
            { id: 'p2', title: 'Analyzing best practices on Web development frameworks: The lift approach', abstract:'Choosing the Web framework that best fits the requirements is not an easy task for developers. Several frameworks now exist to develop Web applications, such as Struts, JSF, Ruby on Rails, Grails, CakePHP, Django, and Catalyst. However, Lift is a relatively new framework that emerged in 2007 for the Scala programming language and which promises a great number of advantages and additional features. Companies such as Siemens© and IBM®, as well as social networks such as Twitter® and Foursquare®, have now begun to develop their applications by using Scala and Lift. Best practices are activities, technical or important issues identified by users in a specific context, and which have rendered excellent service and are expected to achieve similar results in similar situations. ', authors: ['Sheila M. Saia', 'Jennifer Golbeck', 'Nutan KumarPanda'] , score:5, comment:[], votedUsers:[]},
            { id: 'p3', title: 'Mutual exclusion by four shared bits with not more than quadratic complexity', abstract:'For years, the mutual exclusion algorithm of Lycklama and Hadzilacos (1991) [21] was the optimal mutual exclusion algorithm with the first-come-first-served property, with a minimal number of (non-atomic) communication variables (5 bits per thread). Recently, Aravind published an improvement of it, which uses 4 bits per thread and has simplified waiting conditions. This algorithm is extended here with fault tolerance, and it is verified by assertional methods, using the proof assistant PVS. Progress is proved by means of UNITY logic. ', authors: ['Stanton Parham', 'Micah Vandegrift'] , score:1, comment:[], votedUsers:[]},
          ],

        authors: [
            { id: 'u1', name: 'Sheila M. Saia', affiliation: 'Deakin University', score:10},
            { id: 'u2', name: 'Natalie G. Nelson', affiliation: 'Melbourne University', score:5},
            { id: 'u3', name: 'Sierra N. Young', affiliation: 'Monash University', score:0},
            { id: 'u4', name: 'Stanton Parham', affiliation: 'Adelaide University', score:3},
            { id: 'u5', name: 'Micah Vandegrift', affiliation: 'UNSW University', score:0},
            { id: 'u6', name: 'Alex Booen', affiliation: 'Mexico University', score:0},
            { id: 'u7', name: 'Jennifer Golbeck', affiliation: 'UNISA University', score:0},
            { id: 'u8', name: 'Nutan KumarPanda', affiliation: 'Flinders University', score:0},
            { id: 'u9', name: 'SudhanshuChauhan', affiliation: 'Texas University', score:0},
            { id: 'u10', name: 'Wim H.Hesselink', affiliation: 'UCLA University', score:0},
          ]
    },

    getters :{
        sortPosters: (state) => {
            var sortedposters = state.posters;
            for (let i = 0; i < sortedposters.length; i++) 
            {
              for (let j = i + 1; j < sortedposters.length; j++) 
              {
                if (sortedposters[j].score > sortedposters[i].score) 
                {
                  let temp = sortedposters[j];
                  sortedposters[j] = sortedposters[i];
                  sortedposters[i] = temp;
                }
              }
            }
            return {sortedposters};
        },

        sortAuthors(state)
        {
            var sortedauthors = state.authors;
            for (let i = 0; i < sortedauthors.length; i++) 
            {
              for (let j = i + 1; j < sortedauthors.length; j++) 
              {
                if (sortedauthors[j].score > sortedauthors[i].score) 
                {
                  let temp = sortedauthors[j];
                  sortedauthors[j] = sortedauthors[i];
                  sortedauthors[i] = temp;
                }
              }
            }
            return {sortedauthors};

        }
    },


    mutations: {
        setUser(state, payload) {
            state.user = payload;
            console.log(state.user)
        },
        setAuthIssReady(state,payload){
            state.authIsReady = payload;
        },

        addScore(state, selectedPosterId){
            state.posters.find( (poster) => poster.id === selectedPosterId).score++;
            const selectedPoster = state.posters.find( (poster) => poster.id === selectedPosterId)
            for (let i = 0; i < selectedPoster.authors.length; i++)
            {
                for (let j = 0; j < state.authors.length; j++)
                {
                    if(selectedPoster.authors[i] === state.authors[j].name)
                    {
                        state.authors[j].score++;
                    }
                }
            }
            

            console.log(state.posters.find( (poster) => poster.id === selectedPosterId))
        },

        decreaseScore(state, selectedPosterId)
        {
            state.posters.find( (poster) => poster.id === selectedPosterId).score--;
            const selectedPoster = state.posters.find( (poster) => poster.id === selectedPosterId)
            for (let i = 0; i < selectedPoster.authors.length; i++)
            {
                for (let j = 0; j < state.authors.length; j++)
                {
                    if(selectedPoster.authors[i] === state.authors[j].name)
                    {
                        state.authors[j].score--;
                    }
                }
            }
            
        },

        

        addComment(state, selectedPosterId, payload)
        {
            state.posters.find( (poster) => poster.id === selectedPosterId).comment.push(payload);
        },

        addVoteduser(state, selectedPosterId, payload)
        {
            state.posters.find( (poster) => poster.id === selectedPosterId).votedUsers.push(payload);
        }
        
    },

    actions: 
    {
        async signup(context, { email, password }) {

            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('setUser', response.user)
            }
            else {
                throw new Error("could not complete signup")
            }
        },

        async login(context, { email, password }) {

            const response = await signInWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('setUser', response.user);
                
            }
            else {
                throw new Error("could not complete Sign In")
            }

        },

        async logout(context) {
            await signOut(auth);
            context.commit('setUser', null)
        },

    }


});



export default store