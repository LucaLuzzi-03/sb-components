import './mylabel.css'
import { AllCaps } from '../stories/components/MyLabel.stories';


export interface MyLabelProps {
    /**
    * this is the message to display in the label
    */
    label: string;
    /**
    * this is the label size
    */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
    * these are the available colors, pick any of them
    */
    color?: 'primary' | 'secondary' | 'tertiary',
    /**
    * write TRUE if you want your text capitalized
    */
    allCaps?: boolean,
    /**
     * What background color to use
     */
    fontColor?: string
}


export const MyLabel = ({ 
    label = 'No Label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor
 }: MyLabelProps ) => {
  return (
    <span className={`label ${ size } text-${ color }`} style={{ color: fontColor }}>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}

export default MyLabel;
