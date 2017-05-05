class DropModelsTable < ActiveRecord::Migration[5.0]
  def change
    def up
      drop_table :models
    end

    def down
      raise ActiveRecord::IrreversibleMigration
    end

  end
end
