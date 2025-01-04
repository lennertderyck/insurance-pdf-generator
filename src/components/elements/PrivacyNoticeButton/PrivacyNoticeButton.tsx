import classNames from 'classnames';
import { FC, useState } from 'react';
import Icon from '../../basics/Icon/Icon';
import Dialog from '../Dialog/Dialog';
import styles from './PrivacyNoticeButton.module.scss';

interface Props {};

const PrivacyNoticeButton: FC<Props> = () => {
  const [showMore, setShowMore] = useState(false);
  
  const triggerTransition = () => {
    if (!document.startViewTransition) {
      setShowMore(c => !c);
    }
    else document.startViewTransition(() => {
      setShowMore(c => !c);
    })
  }
  
  return (
    <div className={classNames(styles.context, showMore && styles.active)}>
      <div 
        className={styles.modal} 
      >
        {!showMore && (
          <button 
            className={styles.trigger}
            onClick={triggerTransition}
          >
            <Icon name="spy-fill" />
            <span>Privacy</span>
          </button>
        )}
        {showMore && (
          <div 
            className={styles.content}
            onClick={triggerTransition}
          >
            <Dialog
              icon="spy-fill"
              Title="Privacy"
              className="mb-12 md:mb-16"
            >
              Je gegevens worden uitsluitend lokaal opgeslagen en verwerkt. Hierdoor blijven ze volledig in jouw beheer en wordt de veiligheid van je data gegarandeerd. Je data wordt dus niet met ons of externe partijen gedeeld.
            </Dialog>
          </div>
        )}
      </div>
    </div>
  )
}

export default PrivacyNoticeButton;