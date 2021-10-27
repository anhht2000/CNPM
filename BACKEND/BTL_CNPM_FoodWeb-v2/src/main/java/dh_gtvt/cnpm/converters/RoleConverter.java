package dh_gtvt.cnpm.converters;

import java.util.stream.Stream;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class RoleConverter implements AttributeConverter<role, String>{

	@Override
	public String convertToDatabaseColumn(role role) {
		 if (role == null) {
	            return null;
	        }
	        return role.getCode();
	}

	@Override
	public role convertToEntityAttribute(String code) {
		if (code == null) {
            return null;
        }

        return Stream.of(role.values())
                .filter(c -> c.getCode().equals(code))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
	}

}
