class CreateJoinTableBirdsCharacteristics < ActiveRecord::Migration[6.1]
  def change
    create_join_table :birds, :characteristics do |t|
      # t.index [:bird_id, :characteristic_id]
      # t.index [:characteristic_id, :bird_id]
    end
  end
end
