import { Fragment } from 'react';
import Head from 'next/head';

import {MongoClient} from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>MeetUps</title>
                <meta name='description' content='Browse the meetups'/>
            </Head>
            <MeetupList meetups={props.meetups}/>
        </Fragment>
        
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

    const client = await MongoClient.connect(
        "mongodb+srv://chaitanya:07021992@cluster0.ye76s.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
  
      const meetupsCollection = db.collection("meetups");
      const meetups = await meetupsCollection.find().toArray();

      client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    };
};

export default HomePage;