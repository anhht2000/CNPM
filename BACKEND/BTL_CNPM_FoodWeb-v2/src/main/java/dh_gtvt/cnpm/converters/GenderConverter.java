package dh_gtvt.cnpm.converters;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class GenderConverter implements AttributeConverter<gender, String> {

    @Override
    public String convertToDatabaseColumn(gender gender) {
        if (gender == null) {
            return null;
        }
        return gender.getCode();
    }

    @Override
    public gender convertToEntityAttribute(String code) {
        if (code == null) {
            return null;
        }

        return Stream.of(gender.values())
                .filter(c -> c.getCode().equals(code))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}
