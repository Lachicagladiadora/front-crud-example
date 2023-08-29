type InputProps = {
  type: string,
  onChange?: ()=>void,
  labelChildren?: string,
  value?: string, 
}

export const Input = ({labelChildren, type, onChange}:InputProps) =>{
  return(
    <label
    style={{
      display:'flex',
      gap: '10px',
    }}
    >
      {labelChildren}
      <input type={type} onChange={onChange} placeholder={`write your ${type}`} />
    </label>
  )
}