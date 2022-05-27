/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Flag = ({ countries }) => {

    const styles = {
        allFlags: css`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
        max-width: 580px;
        margin: 0 auto;
        margin-top: 20px;
        `,
        flags: css`
        & img{
            width: 100px;
            height: 60px;
        }
        & h3{
            font-size: 0.75rem;
            text-align: center;
        }
        & p {
            font-size: 0.75rem;
            text-align: center;
        }
        `,
    }
  return (
    <div css={styles.allFlags}>
      {countries.map((countryCard) => {
          return(
        <div css={styles.flags} key={countryCard.id}>
          <img src={countryCard.flag} alt="" />
          <h3>{countryCard.country}</h3>
          <p>{countryCard.subregion}</p>
        </div>
          )
      })}
    </div>
  );
};

export default Flag;
