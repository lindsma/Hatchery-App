class CreateEggs < ActiveRecord::Migration[5.0]
  def change
    create_table :eggs do |t|
      t.integer :total
      t.integer :user_eggs

      t.timestamps
    end
  end
end
