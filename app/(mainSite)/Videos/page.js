import { gql } from '@apollo/client';

// import styles from '../styles/Home.module.css';

import client from '@/apollo-client';

import Player from '@/components/Player';



export default function Home({ videos }) {

  return (

    <div>

      <main>

        <h1>Strapi MUX Video App</h1>

        <h2>Current Uploaded Videos</h2>

        

        {/* {videos.data.map(({ attributes }) => {

          const videoJsOptions = {

            autoplay: false,

            controls: true,

            sources: {

              src: `https://stream.mux.com/${attributes.playback_id}.m3u8`,

              type: 'application/x-mpegURL',

            },

          };

          return <Player {...videoJsOptions} key={attributes.playback_id} />;

        })} */}

      </main>

    </div>

  );

}



export async function getData() {

  const { data } = await client.query({

    query: gql`

      query {

        muxVideoUploaderMuxAssets {

          data {

            attributes {

              playback_id

            }

          }

        }

      }

    `,

  });

  

  return {

    props: {

      videos: data.muxVideoUploaderMuxAssets,

    },

  };

}

