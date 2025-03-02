const FormattedDate = ({isHighLinght,children }) => {
  return (
    <div>
        <span className={`text-sm ${isHighLinght ?"text-primaryTitle":""}`}>
            {children}
            </span>
    </div>
  )
}

export default FormattedDate;