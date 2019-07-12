module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        // Giving the Author model a name of type STRING
        f_name: DataTypes.STRING,
        l_name: DataTypes.STRING,
        email: DataTypes.STRING,
        passphrase: DataTypes.STRING
    });

    User.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.Note, {
            onDelete: "cascade"
        });
    };

    return User;
};
