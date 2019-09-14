class CreateConcepts < ActiveRecord::Migration[5.2]
  def change
    create_table :concepts do |t|
      t.integer :noun_id
      t.integer :adjective_id

      t.timestamps
    end
  end
end
