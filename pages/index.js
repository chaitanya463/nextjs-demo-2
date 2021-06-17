import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMT_MEETUP = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_bugslife_16x9_d75b729e.jpeg',
        address: 'some address 5, 1234 some city',
        description: 'This is the first meet up'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg',
        address: 'some address 5, 1234 some city',
        description: 'This is the secons meet up'
    },
    {
        id: 'm3',
        title: 'A third meetup',
        image: 'https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-06.jpg',
        address: 'some address 5, 1234 some city',
        description: 'This is the third meet up'
    }
]
const HomePage = (props) => {
    return (
        <MeetupList meetups={props.meetups}/>
    );
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: DUMMT_MEETUP
//         }
//     };

// }

export async function getStaticProps() {
    //fetch a http request
    return {
        props: {
            meetups: DUMMT_MEETUP
        },
        revalidate: 1
    };
};

export default HomePage;