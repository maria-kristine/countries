/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Home = () => {
    const styles = {
        home: css`
          padding: 50px;
          max-width: 600px;
          text-align: center;
          margin: 0 auto;
          & h2 {
            color: #304771;
            font-weight: bold;
          }
        `,
      };

    return ( 
        <div css={styles.home}>
            <h2>Country of the day</h2>
            
        </div>
     );
}
 
export default Home;