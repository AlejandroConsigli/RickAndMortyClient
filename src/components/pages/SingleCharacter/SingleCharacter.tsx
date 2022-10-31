import { useEffect } from "react";
import styles from "./singleCharacter.module.scss";
import { useTypedDispatch, useTypedSelector } from "../../../redux/store";
import { getSingleCharacter } from "../../../redux/actions/characters";
import { useParams } from "react-router-dom";

const SingleCharacter = () => {
  const dispatch = useTypedDispatch();
  const params = useParams();
  const {
    characters: { loading, singleCharacter },
  } = useTypedSelector((state) => state);

  useEffect(() => {
    params.id && dispatch(getSingleCharacter(params.id));
  }, [dispatch, params.id]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.space}>
            {!loading &&
              (singleCharacter.id ? (
                <div className={styles.card}>
                  <img
                    className={styles.image}
                    src={singleCharacter.image}
                    alt={singleCharacter.image}
                  />
                  <div className={styles.data}>
                    <span className={styles.name}>{singleCharacter.name}</span>
                    <span className={styles.item}>
                      ({singleCharacter.gender})
                    </span>
                    <div className={styles.groupitem}>
                      <span className={styles.item}>
                        {singleCharacter.status} {singleCharacter.species}
                      </span>
                      {singleCharacter.type && (
                        <span className={styles.item}>
                          {singleCharacter.type} Type
                        </span>
                      )}
                      <span className={styles.item}>
                        From: {singleCharacter.origin?.name}
                      </span>
                      <span className={styles.item}>
                        Location: {singleCharacter.location?.name}
                      </span>
                      <span className={styles.item}>
                        Appearances: {singleCharacter.episode.length}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <span className={styles.empty}>Ups, no character found</span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;
