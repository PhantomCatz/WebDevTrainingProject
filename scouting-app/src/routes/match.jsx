import React from 'react'
import {Input, NumberInput, Checkbox, TextArea, Select, getFieldValue, setFieldValue, setFormValues, resetFields} from '../routes/template.jsx'

export default function Match() {

  const rounds = [
			{ label: "Qualifications", value: "Qualifications" },
			{ label: "Playoffs", value: "Playoffs" },
			{ label: "Finals", value: "Finals" },
		];
    
  return (
    <div>
      
      <Select
					title={"Match Level"}
					name={"match_level"}
					options={rounds}
      />
      <Input
						maxLength={2}
						className="input"
						onKeyPress={(event) => {
							const keyCode = event.keyCode || event.which;
							const keyValue = String.fromCharCode(keyCode);
							if (!/^[A-Za-z]*$/.test(keyValue)) {
								event.preventDefault();
							}
						}}
					/>
    </div>
  )
}
