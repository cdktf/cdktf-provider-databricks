# `dataDatabricksCleanRoomAsset` Submodule <a name="`dataDatabricksCleanRoomAsset` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomAsset <a name="DataDatabricksCleanRoomAsset" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset databricks_clean_room_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAsset;

DataDatabricksCleanRoomAsset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .assetType(java.lang.String)
    .name(java.lang.String)
//  .cleanRoomName(java.lang.String)
//  .foreignTable(DataDatabricksCleanRoomAssetForeignTable)
//  .foreignTableLocalDetails(DataDatabricksCleanRoomAssetForeignTableLocalDetails)
//  .notebook(DataDatabricksCleanRoomAssetNotebook)
//  .table(DataDatabricksCleanRoomAssetTable)
//  .tableLocalDetails(DataDatabricksCleanRoomAssetTableLocalDetails)
//  .view(DataDatabricksCleanRoomAssetView)
//  .viewLocalDetails(DataDatabricksCleanRoomAssetViewLocalDetails)
//  .volumeLocalDetails(DataDatabricksCleanRoomAssetVolumeLocalDetails)
//  .workspaceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.assetType">assetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#asset_type DataDatabricksCleanRoomAsset#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.cleanRoomName">cleanRoomName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#clean_room_name DataDatabricksCleanRoomAsset#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.foreignTable">foreignTable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table DataDatabricksCleanRoomAsset#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.foreignTableLocalDetails">foreignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAsset#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#notebook DataDatabricksCleanRoomAsset#notebook}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table DataDatabricksCleanRoomAsset#table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.tableLocalDetails">tableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table_local_details DataDatabricksCleanRoomAsset#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view DataDatabricksCleanRoomAsset#view}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.viewLocalDetails">viewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view_local_details DataDatabricksCleanRoomAsset#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.volumeLocalDetails">volumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#volume_local_details DataDatabricksCleanRoomAsset#volume_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#workspace_id DataDatabricksCleanRoomAsset#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.assetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#asset_type DataDatabricksCleanRoomAsset#asset_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `cleanRoomName`<sup>Optional</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.cleanRoomName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#clean_room_name DataDatabricksCleanRoomAsset#clean_room_name}.

---

##### `foreignTable`<sup>Optional</sup> <a name="foreignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.foreignTable"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table DataDatabricksCleanRoomAsset#foreign_table}.

---

##### `foreignTableLocalDetails`<sup>Optional</sup> <a name="foreignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.foreignTableLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAsset#foreign_table_local_details}.

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.notebook"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#notebook DataDatabricksCleanRoomAsset#notebook}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.table"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table DataDatabricksCleanRoomAsset#table}.

---

##### `tableLocalDetails`<sup>Optional</sup> <a name="tableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.tableLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table_local_details DataDatabricksCleanRoomAsset#table_local_details}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.view"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view DataDatabricksCleanRoomAsset#view}.

---

##### `viewLocalDetails`<sup>Optional</sup> <a name="viewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.viewLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view_local_details DataDatabricksCleanRoomAsset#view_local_details}.

---

##### `volumeLocalDetails`<sup>Optional</sup> <a name="volumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.volumeLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#volume_local_details DataDatabricksCleanRoomAsset#volume_local_details}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#workspace_id DataDatabricksCleanRoomAsset#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTable">putForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTableLocalDetails">putForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putNotebook">putNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTableLocalDetails">putTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putView">putView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putViewLocalDetails">putViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putVolumeLocalDetails">putVolumeLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetCleanRoomName">resetCleanRoomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetForeignTable">resetForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetForeignTableLocalDetails">resetForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetNotebook">resetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetTableLocalDetails">resetTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetView">resetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetViewLocalDetails">resetViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetVolumeLocalDetails">resetVolumeLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putForeignTable` <a name="putForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTable"></a>

```java
public void putForeignTable(DataDatabricksCleanRoomAssetForeignTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a>

---

##### `putForeignTableLocalDetails` <a name="putForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTableLocalDetails"></a>

```java
public void putForeignTableLocalDetails(DataDatabricksCleanRoomAssetForeignTableLocalDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a>

---

##### `putNotebook` <a name="putNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putNotebook"></a>

```java
public void putNotebook(DataDatabricksCleanRoomAssetNotebook value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a>

---

##### `putTable` <a name="putTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTable"></a>

```java
public void putTable(DataDatabricksCleanRoomAssetTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a>

---

##### `putTableLocalDetails` <a name="putTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTableLocalDetails"></a>

```java
public void putTableLocalDetails(DataDatabricksCleanRoomAssetTableLocalDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a>

---

##### `putView` <a name="putView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putView"></a>

```java
public void putView(DataDatabricksCleanRoomAssetView value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a>

---

##### `putViewLocalDetails` <a name="putViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putViewLocalDetails"></a>

```java
public void putViewLocalDetails(DataDatabricksCleanRoomAssetViewLocalDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putViewLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a>

---

##### `putVolumeLocalDetails` <a name="putVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putVolumeLocalDetails"></a>

```java
public void putVolumeLocalDetails(DataDatabricksCleanRoomAssetVolumeLocalDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putVolumeLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a>

---

##### `resetCleanRoomName` <a name="resetCleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetCleanRoomName"></a>

```java
public void resetCleanRoomName()
```

##### `resetForeignTable` <a name="resetForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetForeignTable"></a>

```java
public void resetForeignTable()
```

##### `resetForeignTableLocalDetails` <a name="resetForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetForeignTableLocalDetails"></a>

```java
public void resetForeignTableLocalDetails()
```

##### `resetNotebook` <a name="resetNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetNotebook"></a>

```java
public void resetNotebook()
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetTable"></a>

```java
public void resetTable()
```

##### `resetTableLocalDetails` <a name="resetTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetTableLocalDetails"></a>

```java
public void resetTableLocalDetails()
```

##### `resetView` <a name="resetView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetView"></a>

```java
public void resetView()
```

##### `resetViewLocalDetails` <a name="resetViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetViewLocalDetails"></a>

```java
public void resetViewLocalDetails()
```

##### `resetVolumeLocalDetails` <a name="resetVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetVolumeLocalDetails"></a>

```java
public void resetVolumeLocalDetails()
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAsset;

DataDatabricksCleanRoomAsset.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAsset;

DataDatabricksCleanRoomAsset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAsset;

DataDatabricksCleanRoomAsset.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAsset;

DataDatabricksCleanRoomAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksCleanRoomAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksCleanRoomAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksCleanRoomAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksCleanRoomAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.addedAt">addedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTable">foreignTable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference">DataDatabricksCleanRoomAssetForeignTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableLocalDetails">foreignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference">DataDatabricksCleanRoomAssetNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.ownerCollaboratorAlias">ownerCollaboratorAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference">DataDatabricksCleanRoomAssetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableLocalDetails">tableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference">DataDatabricksCleanRoomAssetViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewLocalDetails">viewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.volumeLocalDetails">volumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.assetTypeInput">assetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cleanRoomNameInput">cleanRoomNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableInput">foreignTableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableLocalDetailsInput">foreignTableLocalDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.notebookInput">notebookInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableInput">tableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableLocalDetailsInput">tableLocalDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewInput">viewInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewLocalDetailsInput">viewLocalDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.volumeLocalDetailsInput">volumeLocalDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.assetType">assetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cleanRoomName">cleanRoomName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `addedAt`<sup>Required</sup> <a name="addedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.addedAt"></a>

```java
public java.lang.Number getAddedAt();
```

- *Type:* java.lang.Number

---

##### `foreignTable`<sup>Required</sup> <a name="foreignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTable"></a>

```java
public DataDatabricksCleanRoomAssetForeignTableOutputReference getForeignTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference">DataDatabricksCleanRoomAssetForeignTableOutputReference</a>

---

##### `foreignTableLocalDetails`<sup>Required</sup> <a name="foreignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference getForeignTableLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference</a>

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.notebook"></a>

```java
public DataDatabricksCleanRoomAssetNotebookOutputReference getNotebook();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference">DataDatabricksCleanRoomAssetNotebookOutputReference</a>

---

##### `ownerCollaboratorAlias`<sup>Required</sup> <a name="ownerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.ownerCollaboratorAlias"></a>

```java
public java.lang.String getOwnerCollaboratorAlias();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.table"></a>

```java
public DataDatabricksCleanRoomAssetTableOutputReference getTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference">DataDatabricksCleanRoomAssetTableOutputReference</a>

---

##### `tableLocalDetails`<sup>Required</sup> <a name="tableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference getTableLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference</a>

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.view"></a>

```java
public DataDatabricksCleanRoomAssetViewOutputReference getView();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference">DataDatabricksCleanRoomAssetViewOutputReference</a>

---

##### `viewLocalDetails`<sup>Required</sup> <a name="viewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference getViewLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference</a>

---

##### `volumeLocalDetails`<sup>Required</sup> <a name="volumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.volumeLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference getVolumeLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference</a>

---

##### `assetTypeInput`<sup>Optional</sup> <a name="assetTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.assetTypeInput"></a>

```java
public java.lang.String getAssetTypeInput();
```

- *Type:* java.lang.String

---

##### `cleanRoomNameInput`<sup>Optional</sup> <a name="cleanRoomNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cleanRoomNameInput"></a>

```java
public java.lang.String getCleanRoomNameInput();
```

- *Type:* java.lang.String

---

##### `foreignTableInput`<sup>Optional</sup> <a name="foreignTableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableInput"></a>

```java
public java.lang.Object getForeignTableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a>

---

##### `foreignTableLocalDetailsInput`<sup>Optional</sup> <a name="foreignTableLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableLocalDetailsInput"></a>

```java
public java.lang.Object getForeignTableLocalDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notebookInput`<sup>Optional</sup> <a name="notebookInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.notebookInput"></a>

```java
public java.lang.Object getNotebookInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableInput"></a>

```java
public java.lang.Object getTableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a>

---

##### `tableLocalDetailsInput`<sup>Optional</sup> <a name="tableLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableLocalDetailsInput"></a>

```java
public java.lang.Object getTableLocalDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a>

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewInput"></a>

```java
public java.lang.Object getViewInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a>

---

##### `viewLocalDetailsInput`<sup>Optional</sup> <a name="viewLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewLocalDetailsInput"></a>

```java
public java.lang.Object getViewLocalDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a>

---

##### `volumeLocalDetailsInput`<sup>Optional</sup> <a name="volumeLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.volumeLocalDetailsInput"></a>

```java
public java.lang.Object getVolumeLocalDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

---

##### `cleanRoomName`<sup>Required</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cleanRoomName"></a>

```java
public java.lang.String getCleanRoomName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomAssetConfig <a name="DataDatabricksCleanRoomAssetConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetConfig;

DataDatabricksCleanRoomAssetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .assetType(java.lang.String)
    .name(java.lang.String)
//  .cleanRoomName(java.lang.String)
//  .foreignTable(DataDatabricksCleanRoomAssetForeignTable)
//  .foreignTableLocalDetails(DataDatabricksCleanRoomAssetForeignTableLocalDetails)
//  .notebook(DataDatabricksCleanRoomAssetNotebook)
//  .table(DataDatabricksCleanRoomAssetTable)
//  .tableLocalDetails(DataDatabricksCleanRoomAssetTableLocalDetails)
//  .view(DataDatabricksCleanRoomAssetView)
//  .viewLocalDetails(DataDatabricksCleanRoomAssetViewLocalDetails)
//  .volumeLocalDetails(DataDatabricksCleanRoomAssetVolumeLocalDetails)
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.assetType">assetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#asset_type DataDatabricksCleanRoomAsset#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.cleanRoomName">cleanRoomName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#clean_room_name DataDatabricksCleanRoomAsset#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.foreignTable">foreignTable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table DataDatabricksCleanRoomAsset#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.foreignTableLocalDetails">foreignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAsset#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#notebook DataDatabricksCleanRoomAsset#notebook}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table DataDatabricksCleanRoomAsset#table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.tableLocalDetails">tableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table_local_details DataDatabricksCleanRoomAsset#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view DataDatabricksCleanRoomAsset#view}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.viewLocalDetails">viewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view_local_details DataDatabricksCleanRoomAsset#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.volumeLocalDetails">volumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#volume_local_details DataDatabricksCleanRoomAsset#volume_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#workspace_id DataDatabricksCleanRoomAsset#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#asset_type DataDatabricksCleanRoomAsset#asset_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `cleanRoomName`<sup>Optional</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.cleanRoomName"></a>

```java
public java.lang.String getCleanRoomName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#clean_room_name DataDatabricksCleanRoomAsset#clean_room_name}.

---

##### `foreignTable`<sup>Optional</sup> <a name="foreignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.foreignTable"></a>

```java
public DataDatabricksCleanRoomAssetForeignTable getForeignTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table DataDatabricksCleanRoomAsset#foreign_table}.

---

##### `foreignTableLocalDetails`<sup>Optional</sup> <a name="foreignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.foreignTableLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetForeignTableLocalDetails getForeignTableLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAsset#foreign_table_local_details}.

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.notebook"></a>

```java
public DataDatabricksCleanRoomAssetNotebook getNotebook();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#notebook DataDatabricksCleanRoomAsset#notebook}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.table"></a>

```java
public DataDatabricksCleanRoomAssetTable getTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table DataDatabricksCleanRoomAsset#table}.

---

##### `tableLocalDetails`<sup>Optional</sup> <a name="tableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.tableLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetTableLocalDetails getTableLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table_local_details DataDatabricksCleanRoomAsset#table_local_details}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.view"></a>

```java
public DataDatabricksCleanRoomAssetView getView();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view DataDatabricksCleanRoomAsset#view}.

---

##### `viewLocalDetails`<sup>Optional</sup> <a name="viewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.viewLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetViewLocalDetails getViewLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view_local_details DataDatabricksCleanRoomAsset#view_local_details}.

---

##### `volumeLocalDetails`<sup>Optional</sup> <a name="volumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.volumeLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetVolumeLocalDetails getVolumeLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#volume_local_details DataDatabricksCleanRoomAsset#volume_local_details}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#workspace_id DataDatabricksCleanRoomAsset#workspace_id}.

---

### DataDatabricksCleanRoomAssetForeignTable <a name="DataDatabricksCleanRoomAssetForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetForeignTable;

DataDatabricksCleanRoomAssetForeignTable.builder()
    .build();
```


### DataDatabricksCleanRoomAssetForeignTableColumns <a name="DataDatabricksCleanRoomAssetForeignTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetForeignTableColumns;

DataDatabricksCleanRoomAssetForeignTableColumns.builder()
//  .comment(java.lang.String)
//  .mask(DataDatabricksCleanRoomAssetForeignTableColumnsMask)
//  .name(java.lang.String)
//  .nullable(java.lang.Boolean)
//  .nullable(IResolvable)
//  .partitionIndex(java.lang.Number)
//  .position(java.lang.Number)
//  .typeIntervalType(java.lang.String)
//  .typeJson(java.lang.String)
//  .typeName(java.lang.String)
//  .typePrecision(java.lang.Number)
//  .typeScale(java.lang.Number)
//  .typeText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeName">typeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeText">typeText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.mask"></a>

```java
public DataDatabricksCleanRoomAssetForeignTableColumnsMask getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}.

---

##### `partitionIndex`<sup>Optional</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}.

---

##### `typeText`<sup>Optional</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}.

---

### DataDatabricksCleanRoomAssetForeignTableColumnsMask <a name="DataDatabricksCleanRoomAssetForeignTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetForeignTableColumnsMask;

DataDatabricksCleanRoomAssetForeignTableColumnsMask.builder()
//  .functionName(java.lang.String)
//  .usingColumnNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}. |

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}.

---

##### `usingColumnNames`<sup>Optional</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}.

---

### DataDatabricksCleanRoomAssetForeignTableLocalDetails <a name="DataDatabricksCleanRoomAssetForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetForeignTableLocalDetails;

DataDatabricksCleanRoomAssetForeignTableLocalDetails.builder()
    .localName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails.property.localName">localName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}. |

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

### DataDatabricksCleanRoomAssetNotebook <a name="DataDatabricksCleanRoomAssetNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetNotebook;

DataDatabricksCleanRoomAssetNotebook.builder()
    .notebookContent(java.lang.String)
//  .runnerCollaboratorAliases(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.property.notebookContent">notebookContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#notebook_content DataDatabricksCleanRoomAsset#notebook_content}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.property.runnerCollaboratorAliases">runnerCollaboratorAliases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#runner_collaborator_aliases DataDatabricksCleanRoomAsset#runner_collaborator_aliases}. |

---

##### `notebookContent`<sup>Required</sup> <a name="notebookContent" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.property.notebookContent"></a>

```java
public java.lang.String getNotebookContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#notebook_content DataDatabricksCleanRoomAsset#notebook_content}.

---

##### `runnerCollaboratorAliases`<sup>Optional</sup> <a name="runnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.property.runnerCollaboratorAliases"></a>

```java
public java.util.List<java.lang.String> getRunnerCollaboratorAliases();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#runner_collaborator_aliases DataDatabricksCleanRoomAsset#runner_collaborator_aliases}.

---

### DataDatabricksCleanRoomAssetNotebookReviews <a name="DataDatabricksCleanRoomAssetNotebookReviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetNotebookReviews;

DataDatabricksCleanRoomAssetNotebookReviews.builder()
//  .comment(java.lang.String)
//  .createdAtMillis(java.lang.Number)
//  .reviewerCollaboratorAlias(java.lang.String)
//  .reviewState(java.lang.String)
//  .reviewSubReason(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.createdAtMillis">createdAtMillis</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#created_at_millis DataDatabricksCleanRoomAsset#created_at_millis}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias">reviewerCollaboratorAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#reviewer_collaborator_alias DataDatabricksCleanRoomAsset#reviewer_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewState">reviewState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#review_state DataDatabricksCleanRoomAsset#review_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewSubReason">reviewSubReason</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#review_sub_reason DataDatabricksCleanRoomAsset#review_sub_reason}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}.

---

##### `createdAtMillis`<sup>Optional</sup> <a name="createdAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.createdAtMillis"></a>

```java
public java.lang.Number getCreatedAtMillis();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#created_at_millis DataDatabricksCleanRoomAsset#created_at_millis}.

---

##### `reviewerCollaboratorAlias`<sup>Optional</sup> <a name="reviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias"></a>

```java
public java.lang.String getReviewerCollaboratorAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#reviewer_collaborator_alias DataDatabricksCleanRoomAsset#reviewer_collaborator_alias}.

---

##### `reviewState`<sup>Optional</sup> <a name="reviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewState"></a>

```java
public java.lang.String getReviewState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#review_state DataDatabricksCleanRoomAsset#review_state}.

---

##### `reviewSubReason`<sup>Optional</sup> <a name="reviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewSubReason"></a>

```java
public java.lang.String getReviewSubReason();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#review_sub_reason DataDatabricksCleanRoomAsset#review_sub_reason}.

---

### DataDatabricksCleanRoomAssetTable <a name="DataDatabricksCleanRoomAssetTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTable;

DataDatabricksCleanRoomAssetTable.builder()
    .build();
```


### DataDatabricksCleanRoomAssetTableColumns <a name="DataDatabricksCleanRoomAssetTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableColumns;

DataDatabricksCleanRoomAssetTableColumns.builder()
//  .comment(java.lang.String)
//  .mask(DataDatabricksCleanRoomAssetTableColumnsMask)
//  .name(java.lang.String)
//  .nullable(java.lang.Boolean)
//  .nullable(IResolvable)
//  .partitionIndex(java.lang.Number)
//  .position(java.lang.Number)
//  .typeIntervalType(java.lang.String)
//  .typeJson(java.lang.String)
//  .typeName(java.lang.String)
//  .typePrecision(java.lang.Number)
//  .typeScale(java.lang.Number)
//  .typeText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeName">typeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeText">typeText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.mask"></a>

```java
public DataDatabricksCleanRoomAssetTableColumnsMask getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}.

---

##### `partitionIndex`<sup>Optional</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}.

---

##### `typeText`<sup>Optional</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}.

---

### DataDatabricksCleanRoomAssetTableColumnsMask <a name="DataDatabricksCleanRoomAssetTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableColumnsMask;

DataDatabricksCleanRoomAssetTableColumnsMask.builder()
//  .functionName(java.lang.String)
//  .usingColumnNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}. |

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}.

---

##### `usingColumnNames`<sup>Optional</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}.

---

### DataDatabricksCleanRoomAssetTableLocalDetails <a name="DataDatabricksCleanRoomAssetTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableLocalDetails;

DataDatabricksCleanRoomAssetTableLocalDetails.builder()
    .localName(java.lang.String)
//  .partitions(IResolvable)
//  .partitions(java.util.List<DataDatabricksCleanRoomAssetTableLocalDetailsPartitions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.property.localName">localName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.property.partitions">partitions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partitions DataDatabricksCleanRoomAsset#partitions}. |

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

##### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.property.partitions"></a>

```java
public java.lang.Object getPartitions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partitions DataDatabricksCleanRoomAsset#partitions}.

---

### DataDatabricksCleanRoomAssetTableLocalDetailsPartitions <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions;

DataDatabricksCleanRoomAssetTableLocalDetailsPartitions.builder()
//  .value(IResolvable)
//  .value(java.util.List<DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions.property.value">value</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#value DataDatabricksCleanRoomAsset#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#value DataDatabricksCleanRoomAsset#value}.

---

### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue;

DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.builder()
//  .name(java.lang.String)
//  .op(java.lang.String)
//  .recipientPropertyKey(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.op">op</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#op DataDatabricksCleanRoomAsset#op}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey">recipientPropertyKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#recipient_property_key DataDatabricksCleanRoomAsset#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#value DataDatabricksCleanRoomAsset#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `op`<sup>Optional</sup> <a name="op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.op"></a>

```java
public java.lang.String getOp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#op DataDatabricksCleanRoomAsset#op}.

---

##### `recipientPropertyKey`<sup>Optional</sup> <a name="recipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey"></a>

```java
public java.lang.String getRecipientPropertyKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#recipient_property_key DataDatabricksCleanRoomAsset#recipient_property_key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#value DataDatabricksCleanRoomAsset#value}.

---

### DataDatabricksCleanRoomAssetView <a name="DataDatabricksCleanRoomAssetView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetView;

DataDatabricksCleanRoomAssetView.builder()
    .build();
```


### DataDatabricksCleanRoomAssetViewColumns <a name="DataDatabricksCleanRoomAssetViewColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetViewColumns;

DataDatabricksCleanRoomAssetViewColumns.builder()
//  .comment(java.lang.String)
//  .mask(DataDatabricksCleanRoomAssetViewColumnsMask)
//  .name(java.lang.String)
//  .nullable(java.lang.Boolean)
//  .nullable(IResolvable)
//  .partitionIndex(java.lang.Number)
//  .position(java.lang.Number)
//  .typeIntervalType(java.lang.String)
//  .typeJson(java.lang.String)
//  .typeName(java.lang.String)
//  .typePrecision(java.lang.Number)
//  .typeScale(java.lang.Number)
//  .typeText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeName">typeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeText">typeText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.mask"></a>

```java
public DataDatabricksCleanRoomAssetViewColumnsMask getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}.

---

##### `partitionIndex`<sup>Optional</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}.

---

##### `typeText`<sup>Optional</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}.

---

### DataDatabricksCleanRoomAssetViewColumnsMask <a name="DataDatabricksCleanRoomAssetViewColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetViewColumnsMask;

DataDatabricksCleanRoomAssetViewColumnsMask.builder()
//  .functionName(java.lang.String)
//  .usingColumnNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}. |

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}.

---

##### `usingColumnNames`<sup>Optional</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}.

---

### DataDatabricksCleanRoomAssetViewLocalDetails <a name="DataDatabricksCleanRoomAssetViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetViewLocalDetails;

DataDatabricksCleanRoomAssetViewLocalDetails.builder()
    .localName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails.property.localName">localName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}. |

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

### DataDatabricksCleanRoomAssetVolumeLocalDetails <a name="DataDatabricksCleanRoomAssetVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetVolumeLocalDetails;

DataDatabricksCleanRoomAssetVolumeLocalDetails.builder()
    .localName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails.property.localName">localName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}. |

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomAssetForeignTableColumnsList <a name="DataDatabricksCleanRoomAssetForeignTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetForeignTableColumnsList;

new DataDatabricksCleanRoomAssetForeignTableColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.get"></a>

```java
public DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetForeignTableColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetForeignTableColumns</a>>

---


### DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference;

new DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName">resetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames">resetUsingColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionName` <a name="resetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName"></a>

```java
public void resetFunctionName()
```

##### `resetUsingColumnNames` <a name="resetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```java
public void resetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput">usingColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `usingColumnNamesInput`<sup>Optional</sup> <a name="usingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `usingColumnNames`<sup>Required</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a>

---


### DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference;

new DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.putMask">putMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetMask">resetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex">resetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeText">resetTypeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMask` <a name="putMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.putMask"></a>

```java
public void putMask(DataDatabricksCleanRoomAssetForeignTableColumnsMask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetMask` <a name="resetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetMask"></a>

```java
public void resetMask()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNullable` <a name="resetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetNullable"></a>

```java
public void resetNullable()
```

##### `resetPartitionIndex` <a name="resetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex"></a>

```java
public void resetPartitionIndex()
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType"></a>

```java
public void resetTypeIntervalType()
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson"></a>

```java
public void resetTypeJson()
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeName"></a>

```java
public void resetTypeName()
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision"></a>

```java
public void resetTypePrecision()
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale"></a>

```java
public void resetTypeScale()
```

##### `resetTypeText` <a name="resetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeText"></a>

```java
public void resetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.maskInput">maskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput">nullableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput">partitionIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeText">typeText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetForeignTableColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.mask"></a>

```java
public DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `maskInput`<sup>Optional</sup> <a name="maskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.maskInput"></a>

```java
public java.lang.Object getMaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput"></a>

```java
public java.lang.Object getNullableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput"></a>

```java
public java.lang.Number getPartitionIndexInput();
```

- *Type:* java.lang.Number

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```java
public java.lang.String getTypeIntervalTypeInput();
```

- *Type:* java.lang.String

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput"></a>

```java
public java.lang.String getTypeJsonInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput"></a>

```java
public java.lang.Number getTypePrecisionInput();
```

- *Type:* java.lang.Number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput"></a>

```java
public java.lang.Number getTypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput"></a>

```java
public java.lang.String getTypeTextInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.internalValue"></a>

```java
public DataDatabricksCleanRoomAssetForeignTableColumns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetForeignTableColumns</a>

---


### DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference;

new DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput">localNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localNameInput`<sup>Optional</sup> <a name="localNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput"></a>

```java
public java.lang.String getLocalNameInput();
```

- *Type:* java.lang.String

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a>

---


### DataDatabricksCleanRoomAssetForeignTableOutputReference <a name="DataDatabricksCleanRoomAssetForeignTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetForeignTableOutputReference;

new DataDatabricksCleanRoomAssetForeignTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList">DataDatabricksCleanRoomAssetForeignTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.columns"></a>

```java
public DataDatabricksCleanRoomAssetForeignTableColumnsList getColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList">DataDatabricksCleanRoomAssetForeignTableColumnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a>

---


### DataDatabricksCleanRoomAssetNotebookOutputReference <a name="DataDatabricksCleanRoomAssetNotebookOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetNotebookOutputReference;

new DataDatabricksCleanRoomAssetNotebookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases">resetRunnerCollaboratorAliases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRunnerCollaboratorAliases` <a name="resetRunnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases"></a>

```java
public void resetRunnerCollaboratorAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.reviews">reviews</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList">DataDatabricksCleanRoomAssetNotebookReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.reviewState">reviewState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.notebookContentInput">notebookContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput">runnerCollaboratorAliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.notebookContent">notebookContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases">runnerCollaboratorAliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `reviews`<sup>Required</sup> <a name="reviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.reviews"></a>

```java
public DataDatabricksCleanRoomAssetNotebookReviewsList getReviews();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList">DataDatabricksCleanRoomAssetNotebookReviewsList</a>

---

##### `reviewState`<sup>Required</sup> <a name="reviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.reviewState"></a>

```java
public java.lang.String getReviewState();
```

- *Type:* java.lang.String

---

##### `notebookContentInput`<sup>Optional</sup> <a name="notebookContentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.notebookContentInput"></a>

```java
public java.lang.String getNotebookContentInput();
```

- *Type:* java.lang.String

---

##### `runnerCollaboratorAliasesInput`<sup>Optional</sup> <a name="runnerCollaboratorAliasesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput"></a>

```java
public java.util.List<java.lang.String> getRunnerCollaboratorAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notebookContent`<sup>Required</sup> <a name="notebookContent" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.notebookContent"></a>

```java
public java.lang.String getNotebookContent();
```

- *Type:* java.lang.String

---

##### `runnerCollaboratorAliases`<sup>Required</sup> <a name="runnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases"></a>

```java
public java.util.List<java.lang.String> getRunnerCollaboratorAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a>

---


### DataDatabricksCleanRoomAssetNotebookReviewsList <a name="DataDatabricksCleanRoomAssetNotebookReviewsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetNotebookReviewsList;

new DataDatabricksCleanRoomAssetNotebookReviewsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.get"></a>

```java
public DataDatabricksCleanRoomAssetNotebookReviewsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetNotebookReviews</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetNotebookReviews</a>>

---


### DataDatabricksCleanRoomAssetNotebookReviewsOutputReference <a name="DataDatabricksCleanRoomAssetNotebookReviewsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference;

new DataDatabricksCleanRoomAssetNotebookReviewsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis">resetCreatedAtMillis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias">resetReviewerCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewState">resetReviewState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason">resetReviewSubReason</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetCreatedAtMillis` <a name="resetCreatedAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis"></a>

```java
public void resetCreatedAtMillis()
```

##### `resetReviewerCollaboratorAlias` <a name="resetReviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias"></a>

```java
public void resetReviewerCollaboratorAlias()
```

##### `resetReviewState` <a name="resetReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewState"></a>

```java
public void resetReviewState()
```

##### `resetReviewSubReason` <a name="resetReviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason"></a>

```java
public void resetReviewSubReason()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput">createdAtMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput">reviewerCollaboratorAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput">reviewStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput">reviewSubReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis">createdAtMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias">reviewerCollaboratorAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewState">reviewState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason">reviewSubReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetNotebookReviews</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `createdAtMillisInput`<sup>Optional</sup> <a name="createdAtMillisInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput"></a>

```java
public java.lang.Number getCreatedAtMillisInput();
```

- *Type:* java.lang.Number

---

##### `reviewerCollaboratorAliasInput`<sup>Optional</sup> <a name="reviewerCollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput"></a>

```java
public java.lang.String getReviewerCollaboratorAliasInput();
```

- *Type:* java.lang.String

---

##### `reviewStateInput`<sup>Optional</sup> <a name="reviewStateInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput"></a>

```java
public java.lang.String getReviewStateInput();
```

- *Type:* java.lang.String

---

##### `reviewSubReasonInput`<sup>Optional</sup> <a name="reviewSubReasonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput"></a>

```java
public java.lang.String getReviewSubReasonInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdAtMillis`<sup>Required</sup> <a name="createdAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis"></a>

```java
public java.lang.Number getCreatedAtMillis();
```

- *Type:* java.lang.Number

---

##### `reviewerCollaboratorAlias`<sup>Required</sup> <a name="reviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias"></a>

```java
public java.lang.String getReviewerCollaboratorAlias();
```

- *Type:* java.lang.String

---

##### `reviewState`<sup>Required</sup> <a name="reviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewState"></a>

```java
public java.lang.String getReviewState();
```

- *Type:* java.lang.String

---

##### `reviewSubReason`<sup>Required</sup> <a name="reviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason"></a>

```java
public java.lang.String getReviewSubReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.internalValue"></a>

```java
public DataDatabricksCleanRoomAssetNotebookReviews getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetNotebookReviews</a>

---


### DataDatabricksCleanRoomAssetTableColumnsList <a name="DataDatabricksCleanRoomAssetTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableColumnsList;

new DataDatabricksCleanRoomAssetTableColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.get"></a>

```java
public DataDatabricksCleanRoomAssetTableColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetTableColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetTableColumns</a>>

---


### DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference;

new DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName">resetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames">resetUsingColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionName` <a name="resetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName"></a>

```java
public void resetFunctionName()
```

##### `resetUsingColumnNames` <a name="resetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```java
public void resetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput">usingColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `usingColumnNamesInput`<sup>Optional</sup> <a name="usingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `usingColumnNames`<sup>Required</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a>

---


### DataDatabricksCleanRoomAssetTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableColumnsOutputReference;

new DataDatabricksCleanRoomAssetTableColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.putMask">putMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetMask">resetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetPartitionIndex">resetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeText">resetTypeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMask` <a name="putMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.putMask"></a>

```java
public void putMask(DataDatabricksCleanRoomAssetTableColumnsMask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetMask` <a name="resetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetMask"></a>

```java
public void resetMask()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNullable` <a name="resetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetNullable"></a>

```java
public void resetNullable()
```

##### `resetPartitionIndex` <a name="resetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetPartitionIndex"></a>

```java
public void resetPartitionIndex()
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType"></a>

```java
public void resetTypeIntervalType()
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeJson"></a>

```java
public void resetTypeJson()
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeName"></a>

```java
public void resetTypeName()
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypePrecision"></a>

```java
public void resetTypePrecision()
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeScale"></a>

```java
public void resetTypeScale()
```

##### `resetTypeText` <a name="resetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeText"></a>

```java
public void resetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.maskInput">maskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nullableInput">nullableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput">partitionIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeText">typeText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetTableColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.mask"></a>

```java
public DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `maskInput`<sup>Optional</sup> <a name="maskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.maskInput"></a>

```java
public java.lang.Object getMaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nullableInput"></a>

```java
public java.lang.Object getNullableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput"></a>

```java
public java.lang.Number getPartitionIndexInput();
```

- *Type:* java.lang.Number

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```java
public java.lang.String getTypeIntervalTypeInput();
```

- *Type:* java.lang.String

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeJsonInput"></a>

```java
public java.lang.String getTypeJsonInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput"></a>

```java
public java.lang.Number getTypePrecisionInput();
```

- *Type:* java.lang.Number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeScaleInput"></a>

```java
public java.lang.Number getTypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeTextInput"></a>

```java
public java.lang.String getTypeTextInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.internalValue"></a>

```java
public DataDatabricksCleanRoomAssetTableColumns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetTableColumns</a>

---


### DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference;

new DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.putPartitions">putPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resetPartitions">resetPartitions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitions` <a name="putPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.putPartitions"></a>

```java
public void putPartitions(IResolvable OR java.util.List<DataDatabricksCleanRoomAssetTableLocalDetailsPartitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.putPartitions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>>

---

##### `resetPartitions` <a name="resetPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resetPartitions"></a>

```java
public void resetPartitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.partitions">partitions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput">localNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput">partitionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.partitions"></a>

```java
public DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList getPartitions();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList</a>

---

##### `localNameInput`<sup>Optional</sup> <a name="localNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput"></a>

```java
public java.lang.String getLocalNameInput();
```

- *Type:* java.lang.String

---

##### `partitionsInput`<sup>Optional</sup> <a name="partitionsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput"></a>

```java
public java.lang.Object getPartitionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>>

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a>

---


### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList;

new DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.get"></a>

```java
public DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>>

---


### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference;

new DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue"></a>

```java
public void putValue(IResolvable OR java.util.List<DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput">valueInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value"></a>

```java
public DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList getValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput"></a>

```java
public java.lang.Object getValueInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>

---


### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList;

new DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.get"></a>

```java
public DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>>

---


### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference;

new DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp">resetOp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey">resetRecipientPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOp` <a name="resetOp" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp"></a>

```java
public void resetOp()
```

##### `resetRecipientPropertyKey` <a name="resetRecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey"></a>

```java
public void resetRecipientPropertyKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput">opInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput">recipientPropertyKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op">op</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey">recipientPropertyKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `opInput`<sup>Optional</sup> <a name="opInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput"></a>

```java
public java.lang.String getOpInput();
```

- *Type:* java.lang.String

---

##### `recipientPropertyKeyInput`<sup>Optional</sup> <a name="recipientPropertyKeyInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput"></a>

```java
public java.lang.String getRecipientPropertyKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op"></a>

```java
public java.lang.String getOp();
```

- *Type:* java.lang.String

---

##### `recipientPropertyKey`<sup>Required</sup> <a name="recipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey"></a>

```java
public java.lang.String getRecipientPropertyKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>

---


### DataDatabricksCleanRoomAssetTableOutputReference <a name="DataDatabricksCleanRoomAssetTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetTableOutputReference;

new DataDatabricksCleanRoomAssetTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList">DataDatabricksCleanRoomAssetTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.columns"></a>

```java
public DataDatabricksCleanRoomAssetTableColumnsList getColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList">DataDatabricksCleanRoomAssetTableColumnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a>

---


### DataDatabricksCleanRoomAssetViewColumnsList <a name="DataDatabricksCleanRoomAssetViewColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetViewColumnsList;

new DataDatabricksCleanRoomAssetViewColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.get"></a>

```java
public DataDatabricksCleanRoomAssetViewColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetViewColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetViewColumns</a>>

---


### DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference;

new DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName">resetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames">resetUsingColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionName` <a name="resetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName"></a>

```java
public void resetFunctionName()
```

##### `resetUsingColumnNames` <a name="resetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames"></a>

```java
public void resetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput">usingColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `usingColumnNamesInput`<sup>Optional</sup> <a name="usingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `usingColumnNames`<sup>Required</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a>

---


### DataDatabricksCleanRoomAssetViewColumnsOutputReference <a name="DataDatabricksCleanRoomAssetViewColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetViewColumnsOutputReference;

new DataDatabricksCleanRoomAssetViewColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.putMask">putMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetMask">resetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetPartitionIndex">resetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeText">resetTypeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMask` <a name="putMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.putMask"></a>

```java
public void putMask(DataDatabricksCleanRoomAssetViewColumnsMask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetMask` <a name="resetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetMask"></a>

```java
public void resetMask()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNullable` <a name="resetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetNullable"></a>

```java
public void resetNullable()
```

##### `resetPartitionIndex` <a name="resetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetPartitionIndex"></a>

```java
public void resetPartitionIndex()
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType"></a>

```java
public void resetTypeIntervalType()
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeJson"></a>

```java
public void resetTypeJson()
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeName"></a>

```java
public void resetTypeName()
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypePrecision"></a>

```java
public void resetTypePrecision()
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeScale"></a>

```java
public void resetTypeScale()
```

##### `resetTypeText` <a name="resetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeText"></a>

```java
public void resetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.maskInput">maskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nullableInput">nullableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput">partitionIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeText">typeText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetViewColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.mask"></a>

```java
public DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `maskInput`<sup>Optional</sup> <a name="maskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.maskInput"></a>

```java
public java.lang.Object getMaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nullableInput"></a>

```java
public java.lang.Object getNullableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput"></a>

```java
public java.lang.Number getPartitionIndexInput();
```

- *Type:* java.lang.Number

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput"></a>

```java
public java.lang.String getTypeIntervalTypeInput();
```

- *Type:* java.lang.String

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeJsonInput"></a>

```java
public java.lang.String getTypeJsonInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput"></a>

```java
public java.lang.Number getTypePrecisionInput();
```

- *Type:* java.lang.Number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeScaleInput"></a>

```java
public java.lang.Number getTypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeTextInput"></a>

```java
public java.lang.String getTypeTextInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.internalValue"></a>

```java
public DataDatabricksCleanRoomAssetViewColumns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetViewColumns</a>

---


### DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference;

new DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput">localNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localNameInput`<sup>Optional</sup> <a name="localNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput"></a>

```java
public java.lang.String getLocalNameInput();
```

- *Type:* java.lang.String

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a>

---


### DataDatabricksCleanRoomAssetViewOutputReference <a name="DataDatabricksCleanRoomAssetViewOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetViewOutputReference;

new DataDatabricksCleanRoomAssetViewOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList">DataDatabricksCleanRoomAssetViewColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.columns"></a>

```java
public DataDatabricksCleanRoomAssetViewColumnsList getColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList">DataDatabricksCleanRoomAssetViewColumnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a>

---


### DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference;

new DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput">localNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localNameInput`<sup>Optional</sup> <a name="localNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput"></a>

```java
public java.lang.String getLocalNameInput();
```

- *Type:* java.lang.String

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a>

---



