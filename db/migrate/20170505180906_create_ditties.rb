class CreateDitties < ActiveRecord::Migration[5.0]
  def change
    create_table :ditties do |t|
      t.belongs_to :user
      t.string :description, null: false
      t.timestamps


    end
  end
end
