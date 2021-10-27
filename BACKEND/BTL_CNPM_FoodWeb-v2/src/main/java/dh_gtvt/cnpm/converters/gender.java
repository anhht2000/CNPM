package dh_gtvt.cnpm.converters;

public enum gender {
    Male("Male"), Female("Female"), Unknown("Unknown");
    private String code;

    gender(String code){
        this.code = code;
    }
    public String getCode() {
        return code;
    }
}
