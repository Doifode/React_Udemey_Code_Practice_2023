import className from "classnames";
// classnames library is used to give class string  on  basis of the true or false value
// basicaly this is a function that returns the object keys as a string depends on the value true or false

// import { PropType } from 'prop-types';
// if wann  to use  default proptypes for  validation

const Buttons = ({
  primary,
  outline,
  secondary,
  rounded,
  danger,
  warning,
  children,
  // children is the default prop that comes from the react liabrary we can use this between the tag use as the text
  //or value
  success,
  ...rest
  //THIS IS REST IS USED AS A REST OF THE FUNCTIONS OR ANY THING WE WANN TO USE AS ON THAT COMPONENT
}) => {
  // classes is the variable were the classnames function will store value as a string
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      // HERE KEY IS A CLASSES OF THE TAILWIND CSS WILL RETURNS DEPENDS UPON THE primary PROP IS IT TRUE OR FALSE
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      // HERE WE USE THE EXPRESSION TO PREPARE THE VALUE WILL BE TRUE OR FALSE
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
  // HERE THE CLASSNAME IS GIVEN BY THE CLASSES VARIABLE GIVEN BY THE FUNCTION
};
Buttons.propTypes = {
  // THIS  IS THE CUSTOME PROPTYPE VALIDATION
  checkVariationValue: ({ primary, secondary, danger, success, warning }) => {
    const count =
      // THIS VALIDATION ANALYSIS THE DONT WE WANT NEED TO USE BOTH TOGETHER IF USED THEN THROW ERROR
      Number(!!primary) +
      Number(!!danger) +
      Number(!!success) +
      Number(!!secondary) +
      Number(!!warning);
    if (count > 1) {
      return new Error(" you cant put both danger and sucess  together");
    }
  },

  // primary : PropTypes.string.isRequired
};

export default Buttons;
