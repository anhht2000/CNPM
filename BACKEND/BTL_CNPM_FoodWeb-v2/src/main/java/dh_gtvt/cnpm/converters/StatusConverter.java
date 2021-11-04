package dh_gtvt.cnpm.converters;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class StatusConverter implements AttributeConverter<status, String> {

    @Override
    public String convertToDatabaseColumn(status status) {
        if (status == null) {
            return null;
        }
        return status.getCode();
    }

    @Override
    public status convertToEntityAttribute(String code) {
        if (code == null) {
            return null;
        }

        return Stream.of(status.values())
                .filter(c -> c.getCode().equals(code))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}
