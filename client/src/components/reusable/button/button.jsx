import { NavLink, useLocation } from "react-router-dom";
import "./button.scss";

const Button = ({
  text,
  iconLeft,
  iconRight,
  fullWidth,
  primary,
  neutral,
  light,
  outline,
  fitContent,
  cornered,
  toUrl,
  handleClick,
  disabled,
}) => {
  const location = useLocation();

  const IconLeft = iconLeft;
  const IconRight = iconRight;
  return toUrl ? (
    <NavLink
      className={({ isActive }) => isActive && "active"}
      to={toUrl}
      state={{ from: location.pathname }}
    >
      <button
        type="submit"
        disabled={disabled && true}
        className={`Button ${primary ? `primary` : ``} ${
          light ? `light` : ``
        } ${outline ? `outline` : ``} ${neutral ? `neutral` : ``} ${
          disabled ? `disabled` : ``
        } ${primary && outline ? "primary_outline" : ""} ${
          fullWidth ? `fullWidth` : ``
        } ${fitContent ? `fitContent` : ``} ${cornered ? `cornered` : ``}`}
      >
        {iconLeft && <IconLeft className="btnIcon left" />} {text}{" "}
        {iconRight && <IconRight className="btnIcon right" />}
      </button>
    </NavLink>
  ) : (
    <button
      type="submit"
      disabled={disabled && true}
      onClick={handleClick}
      className={`Button ${primary ? `primary` : ``} ${light ? `light` : ``} ${
        outline ? `outline` : ``
      } ${neutral ? `neutral` : ``} ${disabled ? `disabled` : ``} ${
        primary && outline ? "primary_outline" : ""
      } ${fullWidth ? `fullWidth` : ``} ${fitContent ? `fitContent` : ``} ${
        cornered ? `cornered` : ``
      }`}
    >
      {iconLeft && <IconLeft className="btnIcon left" />} {text}{" "}
      {iconRight && <IconRight className="btnIcon right" />}
    </button>
  );
};

export default Button;
