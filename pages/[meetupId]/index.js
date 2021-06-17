import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-06.jpg"
      title="First Meetup"
      address="Some address 5, some city"
      description="This is first meetup"
    />
  );
};

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }

            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
        ]
    };
};

export function getStaticProps(context) {
    //fetch data for a single meetup
    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupData: {
                id: meetupId,
                image: "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-06.jpg",
                title: "First Meetup",
                address: "Some address 5, some city",
                description: "This is first meetup"
            }
        }
    }
}

export default MeetupDetails;
