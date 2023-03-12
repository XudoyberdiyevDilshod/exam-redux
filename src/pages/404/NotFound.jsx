import NotFound_404 from "./404-Error-Page.svg";
export const NotFound = () => {
  return (
    <div className="mx-auto my-2">
      <img src={NotFound_404} alt="page not found" width="500" height="500" />
    </div>
  );
};
