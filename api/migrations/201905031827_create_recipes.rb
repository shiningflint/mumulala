Sequel.migration do
  change do
    create_table(:recipes) do
      primary_key :id
      String :name, text: false, null: false, default: 'No name'
      String :description
      DateTime :created_at, null: false, default: Time.now.getutc
      DateTime :updated_at, null: false, default: Time.now.getutc
    end
  end
end
