/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Navbar = () => {

    const styles = {
        navbar: css`
          padding: 20px;
          display: flex;
          align-items: center;
          max-width: 600px;
          margin: 0 auto;
          border-bottom: 2px solid #becfee;
          & h1 {
            color: #304771;
            font-weight: bold;
          }
          & a {
            margin-left: 16px;
            text-decoration: none;
            font-weight: bold;
            padding: 6px;
            color: #304771;
          }
          & a:hover {
            color: #738dbf;
          }
        `,
        links: css`
          margin-left: auto;
        `,
      };
    return ( 
        <div css={styles.navbar}>
            <h1>Know your Country</h1>
            <div css={styles.links}>
                <a href="/home">Home</a>
                <a href="/flag">Flag</a>
            </div>
        </div>
     );
}
 
export default Navbar;
