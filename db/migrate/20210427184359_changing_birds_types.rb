class ChangingBirdsTypes < ActiveRecord::Migration[6.1]
  def change
    rename_column :birds, :type, :type_of_bird
  end
end
