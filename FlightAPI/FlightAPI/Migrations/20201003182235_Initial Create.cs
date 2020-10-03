using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FlightAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Flights",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    flightName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    fromCity = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    fromTimeDate = table.Column<DateTime>(nullable: false),
                    toCity = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    toTimeDate = table.Column<DateTime>(nullable: false),
                    status = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    delay = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Flights", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Flights");
        }
    }
}
