import React from 'react';
import styles from './VoteOptions.module.css';
import type { VoteType } from '../../types/votes';

export interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions: React.FC<VoteOptionsProps> = ({ onVote, onReset, canReset }) => {
  return (
    <div className={styles.controls}>
      <button type="button" onClick={() => onVote('good')}>Good</button>
      <button type="button" onClick={() => onVote('neutral')}>Neutral</button>
      <button type="button" onClick={() => onVote('bad')}>Bad</button>

      <button
        type="button"
        className={canReset ? styles.reset : styles.resetHidden}
        onClick={onReset}
        aria-hidden={!canReset}
      >
        Reset
      </button>
    </div>
  );
};

export default VoteOptions;