﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace NotesOrdersQR
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class NodeOrdersEntities : DbContext
    {
        public NodeOrdersEntities()
            : base("name=NodeOrdersEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<CDTable> CDTables { get; set; }
        public virtual DbSet<Inventory> Inventories { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<SalesPersonTable> SalesPersonTables { get; set; }
        public virtual DbSet<StoreTable> StoreTables { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
    }
}