/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * this is the message to display in the label
    */
    label: string;
    /**
    * this is the label size
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * these are the available colors, pick any of them
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * write TRUE if you want your text capitalized
    */
    allCaps?: boolean;
    /**
     * What background color to use
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor }: MyLabelProps) => JSX.Element;
