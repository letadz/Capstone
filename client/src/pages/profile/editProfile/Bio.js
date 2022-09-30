import "./style.css";
export default function Bio({
  infos,
  handleChange,
  max,
  setShowBio,
  updateDetails,
  placeholder,
  name,
  detail,
  setShow,
  rel,
}) {
  return (
    <div className="add_bio_wrap">
      {rel ? (
        <select
          className="select_rel"
          name={name}
          value={infos.gender}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      ) : (
        <textarea
          placeholder={placeholder}
          name={name}
          value={infos?.[name]}
          maxLength={detail ? 25 : 100}
          className="textarea_blue details_input"
          onChange={handleChange}
        ></textarea>
      )}
      {!detail && <div className="remaining">{max} characters remaining</div>}
      <div className="flex">
        <div className="flex flex_right">
          <button
            className="gray_btn"
            onClick={() => (!detail ? setShowBio(false) : setShow(false))}
          >
            Cancel
          </button>
          <button
            className="orange_btn"
            onClick={() => {
              updateDetails();
              setShow(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
