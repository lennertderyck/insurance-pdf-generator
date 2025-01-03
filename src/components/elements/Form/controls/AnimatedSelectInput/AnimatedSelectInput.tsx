import { autoUpdate, flip, offset, size, useFloating } from '@floating-ui/react';
import classNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import useDynamicViewTransitionNaming from '../../../../../utils/hooks/useDynamicViewTransitionNaming';
import Icon from '../../../../basics/Icon/Icon';
import styles from './AnimatedSelectInput.module.scss';
import { AnimatedSelectInputProps } from './AnimatedSelectInput.types';

const AnimatedSelectInput: FC<AnimatedSelectInputProps> = ({ name, label, options, value, onChange, disabled }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState(false)
  const [transitionNamew, initLabelTransitionWithValueChange] = useDynamicViewTransitionNaming('label');
  const {refs, floatingStyles} = useFloating({
    strategy: 'absolute',
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    open: false,
    middleware: [
      offset(0),
      flip(),
      size({
        apply: ({rects, elements}) => {
          Object.assign(elements.floating.style, {
            minWidth: `${rects.reference.width}px`,
          });
        }
      })
    ]
  });
    
  const hideOptionsView = () => setShowOptions(false);
  const toggleOptionsView = () => disabled ? () => {} : setShowOptions(current => !current);
  const bindSelectHandler = (newValue: string | number) => () => {
    hideOptionsView();
    if (newValue !== value) { // Don't transition or trigger onChange if value is the same
      initLabelTransitionWithValueChange(() => onChange(newValue))
    }
  }
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        hideOptionsView();
      }
    }
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
    
  const currentOption = options?.find(option => option.value === value);
  
  return (
    <>
      <label className={styles.label} htmlFor={name}>{ label }</label>
      <div ref={wrapperRef}>
        <div 
          ref={refs.setReference} 
          className={classNames(styles.controller, disabled && styles.disabled)}
          onClick={toggleOptionsView}
        >
          <div 
            className={classNames(
            styles.labelWrapper,
            )}
            style={{
              viewTransitionName: transitionNamew
            }}
          >
            <span className={styles.label}>{ currentOption?.label || 'No option selected'}</span>
          </div>
          <Icon name="arrow-down-s-line" className={classNames(styles.icon, disabled && styles.disabled)} />
        </div>
        <div 
          ref={refs.setFloating} 
          style={floatingStyles} 
          className={classNames(styles.optionsWrapper, showOptions && styles.visible)}
        >
          <div className={(styles.options)}>
            {options.map((option) => (
              <div 
                key={String(option.value)}
                className={classNames(
                  styles.option, 
                  option.value === value && styles.selected
                )}
                onClick={bindSelectHandler(option.value)}
              >
                <span className={styles.label}>{ option.label }</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AnimatedSelectInput;