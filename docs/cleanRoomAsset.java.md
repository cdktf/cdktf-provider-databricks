# `cleanRoomAsset` Submodule <a name="`cleanRoomAsset` Submodule" id="@cdktf/provider-databricks.cleanRoomAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanRoomAsset <a name="CleanRoomAsset" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset databricks_clean_room_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAsset;

CleanRoomAsset.Builder.create(Construct scope, java.lang.String id)
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
//  .foreignTable(CleanRoomAssetForeignTable)
//  .foreignTableLocalDetails(CleanRoomAssetForeignTableLocalDetails)
//  .notebook(CleanRoomAssetNotebook)
//  .table(CleanRoomAssetTable)
//  .tableLocalDetails(CleanRoomAssetTableLocalDetails)
//  .view(CleanRoomAssetView)
//  .viewLocalDetails(CleanRoomAssetViewLocalDetails)
//  .volumeLocalDetails(CleanRoomAssetVolumeLocalDetails)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.assetType">assetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#asset_type CleanRoomAsset#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.cleanRoomName">cleanRoomName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#clean_room_name CleanRoomAsset#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.foreignTable">foreignTable</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#foreign_table CleanRoomAsset#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.foreignTableLocalDetails">foreignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#foreign_table_local_details CleanRoomAsset#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#notebook CleanRoomAsset#notebook}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#table CleanRoomAsset#table}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.tableLocalDetails">tableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#table_local_details CleanRoomAsset#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#view CleanRoomAsset#view}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.viewLocalDetails">viewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#view_local_details CleanRoomAsset#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.volumeLocalDetails">volumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#volume_local_details CleanRoomAsset#volume_local_details}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.assetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#asset_type CleanRoomAsset#asset_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `cleanRoomName`<sup>Optional</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.cleanRoomName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#clean_room_name CleanRoomAsset#clean_room_name}.

---

##### `foreignTable`<sup>Optional</sup> <a name="foreignTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.foreignTable"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#foreign_table CleanRoomAsset#foreign_table}.

---

##### `foreignTableLocalDetails`<sup>Optional</sup> <a name="foreignTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.foreignTableLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#foreign_table_local_details CleanRoomAsset#foreign_table_local_details}.

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.notebook"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#notebook CleanRoomAsset#notebook}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.table"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#table CleanRoomAsset#table}.

---

##### `tableLocalDetails`<sup>Optional</sup> <a name="tableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.tableLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#table_local_details CleanRoomAsset#table_local_details}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.view"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#view CleanRoomAsset#view}.

---

##### `viewLocalDetails`<sup>Optional</sup> <a name="viewLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.viewLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#view_local_details CleanRoomAsset#view_local_details}.

---

##### `volumeLocalDetails`<sup>Optional</sup> <a name="volumeLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.volumeLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#volume_local_details CleanRoomAsset#volume_local_details}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTable">putForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTableLocalDetails">putForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putNotebook">putNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTableLocalDetails">putTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putView">putView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putViewLocalDetails">putViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putVolumeLocalDetails">putVolumeLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetCleanRoomName">resetCleanRoomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetForeignTable">resetForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetForeignTableLocalDetails">resetForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetNotebook">resetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetTableLocalDetails">resetTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetView">resetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetViewLocalDetails">resetViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetVolumeLocalDetails">resetVolumeLocalDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putForeignTable` <a name="putForeignTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTable"></a>

```java
public void putForeignTable(CleanRoomAssetForeignTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a>

---

##### `putForeignTableLocalDetails` <a name="putForeignTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTableLocalDetails"></a>

```java
public void putForeignTableLocalDetails(CleanRoomAssetForeignTableLocalDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a>

---

##### `putNotebook` <a name="putNotebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putNotebook"></a>

```java
public void putNotebook(CleanRoomAssetNotebook value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a>

---

##### `putTable` <a name="putTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTable"></a>

```java
public void putTable(CleanRoomAssetTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a>

---

##### `putTableLocalDetails` <a name="putTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTableLocalDetails"></a>

```java
public void putTableLocalDetails(CleanRoomAssetTableLocalDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a>

---

##### `putView` <a name="putView" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putView"></a>

```java
public void putView(CleanRoomAssetView value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a>

---

##### `putViewLocalDetails` <a name="putViewLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putViewLocalDetails"></a>

```java
public void putViewLocalDetails(CleanRoomAssetViewLocalDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putViewLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a>

---

##### `putVolumeLocalDetails` <a name="putVolumeLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putVolumeLocalDetails"></a>

```java
public void putVolumeLocalDetails(CleanRoomAssetVolumeLocalDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putVolumeLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a>

---

##### `resetCleanRoomName` <a name="resetCleanRoomName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetCleanRoomName"></a>

```java
public void resetCleanRoomName()
```

##### `resetForeignTable` <a name="resetForeignTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetForeignTable"></a>

```java
public void resetForeignTable()
```

##### `resetForeignTableLocalDetails` <a name="resetForeignTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetForeignTableLocalDetails"></a>

```java
public void resetForeignTableLocalDetails()
```

##### `resetNotebook` <a name="resetNotebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetNotebook"></a>

```java
public void resetNotebook()
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetTable"></a>

```java
public void resetTable()
```

##### `resetTableLocalDetails` <a name="resetTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetTableLocalDetails"></a>

```java
public void resetTableLocalDetails()
```

##### `resetView` <a name="resetView" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetView"></a>

```java
public void resetView()
```

##### `resetViewLocalDetails` <a name="resetViewLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetViewLocalDetails"></a>

```java
public void resetViewLocalDetails()
```

##### `resetVolumeLocalDetails` <a name="resetVolumeLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetVolumeLocalDetails"></a>

```java
public void resetVolumeLocalDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CleanRoomAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAsset;

CleanRoomAsset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAsset;

CleanRoomAsset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAsset;

CleanRoomAsset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAsset;

CleanRoomAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CleanRoomAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CleanRoomAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CleanRoomAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CleanRoomAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CleanRoomAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.addedAt">addedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTable">foreignTable</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference">CleanRoomAssetForeignTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableLocalDetails">foreignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference">CleanRoomAssetForeignTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference">CleanRoomAssetNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.ownerCollaboratorAlias">ownerCollaboratorAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference">CleanRoomAssetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableLocalDetails">tableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference">CleanRoomAssetTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference">CleanRoomAssetViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewLocalDetails">viewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference">CleanRoomAssetViewLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.volumeLocalDetails">volumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference">CleanRoomAssetVolumeLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.assetTypeInput">assetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cleanRoomNameInput">cleanRoomNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableInput">foreignTableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableLocalDetailsInput">foreignTableLocalDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.notebookInput">notebookInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableInput">tableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableLocalDetailsInput">tableLocalDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewInput">viewInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewLocalDetailsInput">viewLocalDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.volumeLocalDetailsInput">volumeLocalDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.assetType">assetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cleanRoomName">cleanRoomName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addedAt`<sup>Required</sup> <a name="addedAt" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.addedAt"></a>

```java
public java.lang.Number getAddedAt();
```

- *Type:* java.lang.Number

---

##### `foreignTable`<sup>Required</sup> <a name="foreignTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTable"></a>

```java
public CleanRoomAssetForeignTableOutputReference getForeignTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference">CleanRoomAssetForeignTableOutputReference</a>

---

##### `foreignTableLocalDetails`<sup>Required</sup> <a name="foreignTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableLocalDetails"></a>

```java
public CleanRoomAssetForeignTableLocalDetailsOutputReference getForeignTableLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference">CleanRoomAssetForeignTableLocalDetailsOutputReference</a>

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.notebook"></a>

```java
public CleanRoomAssetNotebookOutputReference getNotebook();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference">CleanRoomAssetNotebookOutputReference</a>

---

##### `ownerCollaboratorAlias`<sup>Required</sup> <a name="ownerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.ownerCollaboratorAlias"></a>

```java
public java.lang.String getOwnerCollaboratorAlias();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.table"></a>

```java
public CleanRoomAssetTableOutputReference getTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference">CleanRoomAssetTableOutputReference</a>

---

##### `tableLocalDetails`<sup>Required</sup> <a name="tableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableLocalDetails"></a>

```java
public CleanRoomAssetTableLocalDetailsOutputReference getTableLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference">CleanRoomAssetTableLocalDetailsOutputReference</a>

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.view"></a>

```java
public CleanRoomAssetViewOutputReference getView();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference">CleanRoomAssetViewOutputReference</a>

---

##### `viewLocalDetails`<sup>Required</sup> <a name="viewLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewLocalDetails"></a>

```java
public CleanRoomAssetViewLocalDetailsOutputReference getViewLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference">CleanRoomAssetViewLocalDetailsOutputReference</a>

---

##### `volumeLocalDetails`<sup>Required</sup> <a name="volumeLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.volumeLocalDetails"></a>

```java
public CleanRoomAssetVolumeLocalDetailsOutputReference getVolumeLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference">CleanRoomAssetVolumeLocalDetailsOutputReference</a>

---

##### `assetTypeInput`<sup>Optional</sup> <a name="assetTypeInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.assetTypeInput"></a>

```java
public java.lang.String getAssetTypeInput();
```

- *Type:* java.lang.String

---

##### `cleanRoomNameInput`<sup>Optional</sup> <a name="cleanRoomNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cleanRoomNameInput"></a>

```java
public java.lang.String getCleanRoomNameInput();
```

- *Type:* java.lang.String

---

##### `foreignTableInput`<sup>Optional</sup> <a name="foreignTableInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableInput"></a>

```java
public java.lang.Object getForeignTableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a>

---

##### `foreignTableLocalDetailsInput`<sup>Optional</sup> <a name="foreignTableLocalDetailsInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableLocalDetailsInput"></a>

```java
public java.lang.Object getForeignTableLocalDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notebookInput`<sup>Optional</sup> <a name="notebookInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.notebookInput"></a>

```java
public java.lang.Object getNotebookInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableInput"></a>

```java
public java.lang.Object getTableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a>

---

##### `tableLocalDetailsInput`<sup>Optional</sup> <a name="tableLocalDetailsInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableLocalDetailsInput"></a>

```java
public java.lang.Object getTableLocalDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a>

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewInput"></a>

```java
public java.lang.Object getViewInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a>

---

##### `viewLocalDetailsInput`<sup>Optional</sup> <a name="viewLocalDetailsInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewLocalDetailsInput"></a>

```java
public java.lang.Object getViewLocalDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a>

---

##### `volumeLocalDetailsInput`<sup>Optional</sup> <a name="volumeLocalDetailsInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.volumeLocalDetailsInput"></a>

```java
public java.lang.Object getVolumeLocalDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a>

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

---

##### `cleanRoomName`<sup>Required</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cleanRoomName"></a>

```java
public java.lang.String getCleanRoomName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CleanRoomAssetConfig <a name="CleanRoomAssetConfig" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetConfig;

CleanRoomAssetConfig.builder()
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
//  .foreignTable(CleanRoomAssetForeignTable)
//  .foreignTableLocalDetails(CleanRoomAssetForeignTableLocalDetails)
//  .notebook(CleanRoomAssetNotebook)
//  .table(CleanRoomAssetTable)
//  .tableLocalDetails(CleanRoomAssetTableLocalDetails)
//  .view(CleanRoomAssetView)
//  .viewLocalDetails(CleanRoomAssetViewLocalDetails)
//  .volumeLocalDetails(CleanRoomAssetVolumeLocalDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.assetType">assetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#asset_type CleanRoomAsset#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.cleanRoomName">cleanRoomName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#clean_room_name CleanRoomAsset#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.foreignTable">foreignTable</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#foreign_table CleanRoomAsset#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.foreignTableLocalDetails">foreignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#foreign_table_local_details CleanRoomAsset#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#notebook CleanRoomAsset#notebook}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#table CleanRoomAsset#table}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.tableLocalDetails">tableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#table_local_details CleanRoomAsset#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#view CleanRoomAsset#view}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.viewLocalDetails">viewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#view_local_details CleanRoomAsset#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.volumeLocalDetails">volumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#volume_local_details CleanRoomAsset#volume_local_details}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#asset_type CleanRoomAsset#asset_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `cleanRoomName`<sup>Optional</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.cleanRoomName"></a>

```java
public java.lang.String getCleanRoomName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#clean_room_name CleanRoomAsset#clean_room_name}.

---

##### `foreignTable`<sup>Optional</sup> <a name="foreignTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.foreignTable"></a>

```java
public CleanRoomAssetForeignTable getForeignTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#foreign_table CleanRoomAsset#foreign_table}.

---

##### `foreignTableLocalDetails`<sup>Optional</sup> <a name="foreignTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.foreignTableLocalDetails"></a>

```java
public CleanRoomAssetForeignTableLocalDetails getForeignTableLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#foreign_table_local_details CleanRoomAsset#foreign_table_local_details}.

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.notebook"></a>

```java
public CleanRoomAssetNotebook getNotebook();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#notebook CleanRoomAsset#notebook}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.table"></a>

```java
public CleanRoomAssetTable getTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#table CleanRoomAsset#table}.

---

##### `tableLocalDetails`<sup>Optional</sup> <a name="tableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.tableLocalDetails"></a>

```java
public CleanRoomAssetTableLocalDetails getTableLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#table_local_details CleanRoomAsset#table_local_details}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.view"></a>

```java
public CleanRoomAssetView getView();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#view CleanRoomAsset#view}.

---

##### `viewLocalDetails`<sup>Optional</sup> <a name="viewLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.viewLocalDetails"></a>

```java
public CleanRoomAssetViewLocalDetails getViewLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#view_local_details CleanRoomAsset#view_local_details}.

---

##### `volumeLocalDetails`<sup>Optional</sup> <a name="volumeLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.volumeLocalDetails"></a>

```java
public CleanRoomAssetVolumeLocalDetails getVolumeLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#volume_local_details CleanRoomAsset#volume_local_details}.

---

### CleanRoomAssetForeignTable <a name="CleanRoomAssetForeignTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetForeignTable;

CleanRoomAssetForeignTable.builder()
    .build();
```


### CleanRoomAssetForeignTableColumns <a name="CleanRoomAssetForeignTableColumns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetForeignTableColumns;

CleanRoomAssetForeignTableColumns.builder()
//  .comment(java.lang.String)
//  .mask(CleanRoomAssetForeignTableColumnsMask)
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
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#position CleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeName">typeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeText">typeText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.mask"></a>

```java
public CleanRoomAssetForeignTableColumnsMask getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}.

---

##### `partitionIndex`<sup>Optional</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#position CleanRoomAsset#position}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}.

---

##### `typeText`<sup>Optional</sup> <a name="typeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}.

---

### CleanRoomAssetForeignTableColumnsMask <a name="CleanRoomAssetForeignTableColumnsMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetForeignTableColumnsMask;

CleanRoomAssetForeignTableColumnsMask.builder()
//  .functionName(java.lang.String)
//  .usingColumnNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}. |

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}.

---

##### `usingColumnNames`<sup>Optional</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}.

---

### CleanRoomAssetForeignTableLocalDetails <a name="CleanRoomAssetForeignTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetForeignTableLocalDetails;

CleanRoomAssetForeignTableLocalDetails.builder()
    .localName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails.property.localName">localName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}. |

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

### CleanRoomAssetNotebook <a name="CleanRoomAssetNotebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetNotebook;

CleanRoomAssetNotebook.builder()
    .notebookContent(java.lang.String)
//  .runnerCollaboratorAliases(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.property.notebookContent">notebookContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#notebook_content CleanRoomAsset#notebook_content}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.property.runnerCollaboratorAliases">runnerCollaboratorAliases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#runner_collaborator_aliases CleanRoomAsset#runner_collaborator_aliases}. |

---

##### `notebookContent`<sup>Required</sup> <a name="notebookContent" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.property.notebookContent"></a>

```java
public java.lang.String getNotebookContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#notebook_content CleanRoomAsset#notebook_content}.

---

##### `runnerCollaboratorAliases`<sup>Optional</sup> <a name="runnerCollaboratorAliases" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.property.runnerCollaboratorAliases"></a>

```java
public java.util.List<java.lang.String> getRunnerCollaboratorAliases();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#runner_collaborator_aliases CleanRoomAsset#runner_collaborator_aliases}.

---

### CleanRoomAssetNotebookReviews <a name="CleanRoomAssetNotebookReviews" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetNotebookReviews;

CleanRoomAssetNotebookReviews.builder()
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
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.createdAtMillis">createdAtMillis</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#created_at_millis CleanRoomAsset#created_at_millis}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias">reviewerCollaboratorAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#reviewer_collaborator_alias CleanRoomAsset#reviewer_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewState">reviewState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#review_state CleanRoomAsset#review_state}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewSubReason">reviewSubReason</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#review_sub_reason CleanRoomAsset#review_sub_reason}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}.

---

##### `createdAtMillis`<sup>Optional</sup> <a name="createdAtMillis" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.createdAtMillis"></a>

```java
public java.lang.Number getCreatedAtMillis();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#created_at_millis CleanRoomAsset#created_at_millis}.

---

##### `reviewerCollaboratorAlias`<sup>Optional</sup> <a name="reviewerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias"></a>

```java
public java.lang.String getReviewerCollaboratorAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#reviewer_collaborator_alias CleanRoomAsset#reviewer_collaborator_alias}.

---

##### `reviewState`<sup>Optional</sup> <a name="reviewState" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewState"></a>

```java
public java.lang.String getReviewState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#review_state CleanRoomAsset#review_state}.

---

##### `reviewSubReason`<sup>Optional</sup> <a name="reviewSubReason" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewSubReason"></a>

```java
public java.lang.String getReviewSubReason();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#review_sub_reason CleanRoomAsset#review_sub_reason}.

---

### CleanRoomAssetTable <a name="CleanRoomAssetTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTable;

CleanRoomAssetTable.builder()
    .build();
```


### CleanRoomAssetTableColumns <a name="CleanRoomAssetTableColumns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableColumns;

CleanRoomAssetTableColumns.builder()
//  .comment(java.lang.String)
//  .mask(CleanRoomAssetTableColumnsMask)
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
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#position CleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeName">typeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeText">typeText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.mask"></a>

```java
public CleanRoomAssetTableColumnsMask getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}.

---

##### `partitionIndex`<sup>Optional</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#position CleanRoomAsset#position}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}.

---

##### `typeText`<sup>Optional</sup> <a name="typeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}.

---

### CleanRoomAssetTableColumnsMask <a name="CleanRoomAssetTableColumnsMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableColumnsMask;

CleanRoomAssetTableColumnsMask.builder()
//  .functionName(java.lang.String)
//  .usingColumnNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}. |

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}.

---

##### `usingColumnNames`<sup>Optional</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}.

---

### CleanRoomAssetTableLocalDetails <a name="CleanRoomAssetTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableLocalDetails;

CleanRoomAssetTableLocalDetails.builder()
    .localName(java.lang.String)
//  .partitions(IResolvable)
//  .partitions(java.util.List<CleanRoomAssetTableLocalDetailsPartitions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.property.localName">localName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.property.partitions">partitions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#partitions CleanRoomAsset#partitions}. |

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

##### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.property.partitions"></a>

```java
public java.lang.Object getPartitions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#partitions CleanRoomAsset#partitions}.

---

### CleanRoomAssetTableLocalDetailsPartitions <a name="CleanRoomAssetTableLocalDetailsPartitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableLocalDetailsPartitions;

CleanRoomAssetTableLocalDetailsPartitions.builder()
//  .value(IResolvable)
//  .value(java.util.List<CleanRoomAssetTableLocalDetailsPartitionsValue>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions.property.value">value</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#value CleanRoomAsset#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#value CleanRoomAsset#value}.

---

### CleanRoomAssetTableLocalDetailsPartitionsValue <a name="CleanRoomAssetTableLocalDetailsPartitionsValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableLocalDetailsPartitionsValue;

CleanRoomAssetTableLocalDetailsPartitionsValue.builder()
//  .name(java.lang.String)
//  .op(java.lang.String)
//  .recipientPropertyKey(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.op">op</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#op CleanRoomAsset#op}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey">recipientPropertyKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#recipient_property_key CleanRoomAsset#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#value CleanRoomAsset#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `op`<sup>Optional</sup> <a name="op" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.op"></a>

```java
public java.lang.String getOp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#op CleanRoomAsset#op}.

---

##### `recipientPropertyKey`<sup>Optional</sup> <a name="recipientPropertyKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey"></a>

```java
public java.lang.String getRecipientPropertyKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#recipient_property_key CleanRoomAsset#recipient_property_key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#value CleanRoomAsset#value}.

---

### CleanRoomAssetView <a name="CleanRoomAssetView" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetView;

CleanRoomAssetView.builder()
    .build();
```


### CleanRoomAssetViewColumns <a name="CleanRoomAssetViewColumns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetViewColumns;

CleanRoomAssetViewColumns.builder()
//  .comment(java.lang.String)
//  .mask(CleanRoomAssetViewColumnsMask)
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
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#position CleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeName">typeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeText">typeText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.mask"></a>

```java
public CleanRoomAssetViewColumnsMask getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}.

---

##### `partitionIndex`<sup>Optional</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#position CleanRoomAsset#position}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}.

---

##### `typeText`<sup>Optional</sup> <a name="typeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}.

---

### CleanRoomAssetViewColumnsMask <a name="CleanRoomAssetViewColumnsMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetViewColumnsMask;

CleanRoomAssetViewColumnsMask.builder()
//  .functionName(java.lang.String)
//  .usingColumnNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}. |

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}.

---

##### `usingColumnNames`<sup>Optional</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}.

---

### CleanRoomAssetViewLocalDetails <a name="CleanRoomAssetViewLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetViewLocalDetails;

CleanRoomAssetViewLocalDetails.builder()
    .localName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails.property.localName">localName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}. |

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

### CleanRoomAssetVolumeLocalDetails <a name="CleanRoomAssetVolumeLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetVolumeLocalDetails;

CleanRoomAssetVolumeLocalDetails.builder()
    .localName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails.property.localName">localName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}. |

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanRoomAssetForeignTableColumnsList <a name="CleanRoomAssetForeignTableColumnsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetForeignTableColumnsList;

new CleanRoomAssetForeignTableColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.get"></a>

```java
public CleanRoomAssetForeignTableColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns">CleanRoomAssetForeignTableColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns">CleanRoomAssetForeignTableColumns</a>>

---


### CleanRoomAssetForeignTableColumnsMaskOutputReference <a name="CleanRoomAssetForeignTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetForeignTableColumnsMaskOutputReference;

new CleanRoomAssetForeignTableColumnsMaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName">resetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames">resetUsingColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionName` <a name="resetFunctionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName"></a>

```java
public void resetFunctionName()
```

##### `resetUsingColumnNames` <a name="resetUsingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```java
public void resetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput">usingColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `usingColumnNamesInput`<sup>Optional</sup> <a name="usingColumnNamesInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `usingColumnNames`<sup>Required</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a>

---


### CleanRoomAssetForeignTableColumnsOutputReference <a name="CleanRoomAssetForeignTableColumnsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetForeignTableColumnsOutputReference;

new CleanRoomAssetForeignTableColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.putMask">putMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetMask">resetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex">resetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeText">resetTypeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMask` <a name="putMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.putMask"></a>

```java
public void putMask(CleanRoomAssetForeignTableColumnsMask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetMask` <a name="resetMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetMask"></a>

```java
public void resetMask()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNullable` <a name="resetNullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetNullable"></a>

```java
public void resetNullable()
```

##### `resetPartitionIndex` <a name="resetPartitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex"></a>

```java
public void resetPartitionIndex()
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType"></a>

```java
public void resetTypeIntervalType()
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson"></a>

```java
public void resetTypeJson()
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeName"></a>

```java
public void resetTypeName()
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision"></a>

```java
public void resetTypePrecision()
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale"></a>

```java
public void resetTypeScale()
```

##### `resetTypeText` <a name="resetTypeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeText"></a>

```java
public void resetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference">CleanRoomAssetForeignTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.maskInput">maskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput">nullableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput">partitionIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeText">typeText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns">CleanRoomAssetForeignTableColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.mask"></a>

```java
public CleanRoomAssetForeignTableColumnsMaskOutputReference getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference">CleanRoomAssetForeignTableColumnsMaskOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `maskInput`<sup>Optional</sup> <a name="maskInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.maskInput"></a>

```java
public java.lang.Object getMaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput"></a>

```java
public java.lang.Object getNullableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput"></a>

```java
public java.lang.Number getPartitionIndexInput();
```

- *Type:* java.lang.Number

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```java
public java.lang.String getTypeIntervalTypeInput();
```

- *Type:* java.lang.String

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput"></a>

```java
public java.lang.String getTypeJsonInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput"></a>

```java
public java.lang.Number getTypePrecisionInput();
```

- *Type:* java.lang.Number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput"></a>

```java
public java.lang.Number getTypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput"></a>

```java
public java.lang.String getTypeTextInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.internalValue"></a>

```java
public CleanRoomAssetForeignTableColumns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns">CleanRoomAssetForeignTableColumns</a>

---


### CleanRoomAssetForeignTableLocalDetailsOutputReference <a name="CleanRoomAssetForeignTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetForeignTableLocalDetailsOutputReference;

new CleanRoomAssetForeignTableLocalDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput">localNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localNameInput`<sup>Optional</sup> <a name="localNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput"></a>

```java
public java.lang.String getLocalNameInput();
```

- *Type:* java.lang.String

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a>

---


### CleanRoomAssetForeignTableOutputReference <a name="CleanRoomAssetForeignTableOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetForeignTableOutputReference;

new CleanRoomAssetForeignTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList">CleanRoomAssetForeignTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.columns"></a>

```java
public CleanRoomAssetForeignTableColumnsList getColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList">CleanRoomAssetForeignTableColumnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a>

---


### CleanRoomAssetNotebookOutputReference <a name="CleanRoomAssetNotebookOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetNotebookOutputReference;

new CleanRoomAssetNotebookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases">resetRunnerCollaboratorAliases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRunnerCollaboratorAliases` <a name="resetRunnerCollaboratorAliases" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases"></a>

```java
public void resetRunnerCollaboratorAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.reviews">reviews</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList">CleanRoomAssetNotebookReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.reviewState">reviewState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.notebookContentInput">notebookContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput">runnerCollaboratorAliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.notebookContent">notebookContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases">runnerCollaboratorAliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `reviews`<sup>Required</sup> <a name="reviews" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.reviews"></a>

```java
public CleanRoomAssetNotebookReviewsList getReviews();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList">CleanRoomAssetNotebookReviewsList</a>

---

##### `reviewState`<sup>Required</sup> <a name="reviewState" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.reviewState"></a>

```java
public java.lang.String getReviewState();
```

- *Type:* java.lang.String

---

##### `notebookContentInput`<sup>Optional</sup> <a name="notebookContentInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.notebookContentInput"></a>

```java
public java.lang.String getNotebookContentInput();
```

- *Type:* java.lang.String

---

##### `runnerCollaboratorAliasesInput`<sup>Optional</sup> <a name="runnerCollaboratorAliasesInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput"></a>

```java
public java.util.List<java.lang.String> getRunnerCollaboratorAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notebookContent`<sup>Required</sup> <a name="notebookContent" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.notebookContent"></a>

```java
public java.lang.String getNotebookContent();
```

- *Type:* java.lang.String

---

##### `runnerCollaboratorAliases`<sup>Required</sup> <a name="runnerCollaboratorAliases" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases"></a>

```java
public java.util.List<java.lang.String> getRunnerCollaboratorAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a>

---


### CleanRoomAssetNotebookReviewsList <a name="CleanRoomAssetNotebookReviewsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetNotebookReviewsList;

new CleanRoomAssetNotebookReviewsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.get"></a>

```java
public CleanRoomAssetNotebookReviewsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews">CleanRoomAssetNotebookReviews</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews">CleanRoomAssetNotebookReviews</a>>

---


### CleanRoomAssetNotebookReviewsOutputReference <a name="CleanRoomAssetNotebookReviewsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetNotebookReviewsOutputReference;

new CleanRoomAssetNotebookReviewsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis">resetCreatedAtMillis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias">resetReviewerCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewState">resetReviewState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason">resetReviewSubReason</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetCreatedAtMillis` <a name="resetCreatedAtMillis" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis"></a>

```java
public void resetCreatedAtMillis()
```

##### `resetReviewerCollaboratorAlias` <a name="resetReviewerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias"></a>

```java
public void resetReviewerCollaboratorAlias()
```

##### `resetReviewState` <a name="resetReviewState" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewState"></a>

```java
public void resetReviewState()
```

##### `resetReviewSubReason` <a name="resetReviewSubReason" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason"></a>

```java
public void resetReviewSubReason()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput">createdAtMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput">reviewerCollaboratorAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput">reviewStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput">reviewSubReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis">createdAtMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias">reviewerCollaboratorAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewState">reviewState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason">reviewSubReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews">CleanRoomAssetNotebookReviews</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `createdAtMillisInput`<sup>Optional</sup> <a name="createdAtMillisInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput"></a>

```java
public java.lang.Number getCreatedAtMillisInput();
```

- *Type:* java.lang.Number

---

##### `reviewerCollaboratorAliasInput`<sup>Optional</sup> <a name="reviewerCollaboratorAliasInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput"></a>

```java
public java.lang.String getReviewerCollaboratorAliasInput();
```

- *Type:* java.lang.String

---

##### `reviewStateInput`<sup>Optional</sup> <a name="reviewStateInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput"></a>

```java
public java.lang.String getReviewStateInput();
```

- *Type:* java.lang.String

---

##### `reviewSubReasonInput`<sup>Optional</sup> <a name="reviewSubReasonInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput"></a>

```java
public java.lang.String getReviewSubReasonInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdAtMillis`<sup>Required</sup> <a name="createdAtMillis" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis"></a>

```java
public java.lang.Number getCreatedAtMillis();
```

- *Type:* java.lang.Number

---

##### `reviewerCollaboratorAlias`<sup>Required</sup> <a name="reviewerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias"></a>

```java
public java.lang.String getReviewerCollaboratorAlias();
```

- *Type:* java.lang.String

---

##### `reviewState`<sup>Required</sup> <a name="reviewState" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewState"></a>

```java
public java.lang.String getReviewState();
```

- *Type:* java.lang.String

---

##### `reviewSubReason`<sup>Required</sup> <a name="reviewSubReason" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason"></a>

```java
public java.lang.String getReviewSubReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.internalValue"></a>

```java
public CleanRoomAssetNotebookReviews getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews">CleanRoomAssetNotebookReviews</a>

---


### CleanRoomAssetTableColumnsList <a name="CleanRoomAssetTableColumnsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableColumnsList;

new CleanRoomAssetTableColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.get"></a>

```java
public CleanRoomAssetTableColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns">CleanRoomAssetTableColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns">CleanRoomAssetTableColumns</a>>

---


### CleanRoomAssetTableColumnsMaskOutputReference <a name="CleanRoomAssetTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableColumnsMaskOutputReference;

new CleanRoomAssetTableColumnsMaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName">resetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames">resetUsingColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionName` <a name="resetFunctionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName"></a>

```java
public void resetFunctionName()
```

##### `resetUsingColumnNames` <a name="resetUsingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```java
public void resetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput">usingColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `usingColumnNamesInput`<sup>Optional</sup> <a name="usingColumnNamesInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `usingColumnNames`<sup>Required</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a>

---


### CleanRoomAssetTableColumnsOutputReference <a name="CleanRoomAssetTableColumnsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableColumnsOutputReference;

new CleanRoomAssetTableColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.putMask">putMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetMask">resetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetPartitionIndex">resetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeText">resetTypeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMask` <a name="putMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.putMask"></a>

```java
public void putMask(CleanRoomAssetTableColumnsMask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetMask` <a name="resetMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetMask"></a>

```java
public void resetMask()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNullable` <a name="resetNullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetNullable"></a>

```java
public void resetNullable()
```

##### `resetPartitionIndex` <a name="resetPartitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetPartitionIndex"></a>

```java
public void resetPartitionIndex()
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType"></a>

```java
public void resetTypeIntervalType()
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeJson"></a>

```java
public void resetTypeJson()
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeName"></a>

```java
public void resetTypeName()
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypePrecision"></a>

```java
public void resetTypePrecision()
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeScale"></a>

```java
public void resetTypeScale()
```

##### `resetTypeText` <a name="resetTypeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeText"></a>

```java
public void resetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference">CleanRoomAssetTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.maskInput">maskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nullableInput">nullableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput">partitionIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeText">typeText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns">CleanRoomAssetTableColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.mask"></a>

```java
public CleanRoomAssetTableColumnsMaskOutputReference getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference">CleanRoomAssetTableColumnsMaskOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `maskInput`<sup>Optional</sup> <a name="maskInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.maskInput"></a>

```java
public java.lang.Object getMaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nullableInput"></a>

```java
public java.lang.Object getNullableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput"></a>

```java
public java.lang.Number getPartitionIndexInput();
```

- *Type:* java.lang.Number

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```java
public java.lang.String getTypeIntervalTypeInput();
```

- *Type:* java.lang.String

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeJsonInput"></a>

```java
public java.lang.String getTypeJsonInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput"></a>

```java
public java.lang.Number getTypePrecisionInput();
```

- *Type:* java.lang.Number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeScaleInput"></a>

```java
public java.lang.Number getTypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeTextInput"></a>

```java
public java.lang.String getTypeTextInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.internalValue"></a>

```java
public CleanRoomAssetTableColumns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns">CleanRoomAssetTableColumns</a>

---


### CleanRoomAssetTableLocalDetailsOutputReference <a name="CleanRoomAssetTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableLocalDetailsOutputReference;

new CleanRoomAssetTableLocalDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.putPartitions">putPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resetPartitions">resetPartitions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitions` <a name="putPartitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.putPartitions"></a>

```java
public void putPartitions(IResolvable OR java.util.List<CleanRoomAssetTableLocalDetailsPartitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.putPartitions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>>

---

##### `resetPartitions` <a name="resetPartitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resetPartitions"></a>

```java
public void resetPartitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.partitions">partitions</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList">CleanRoomAssetTableLocalDetailsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput">localNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput">partitionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.partitions"></a>

```java
public CleanRoomAssetTableLocalDetailsPartitionsList getPartitions();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList">CleanRoomAssetTableLocalDetailsPartitionsList</a>

---

##### `localNameInput`<sup>Optional</sup> <a name="localNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput"></a>

```java
public java.lang.String getLocalNameInput();
```

- *Type:* java.lang.String

---

##### `partitionsInput`<sup>Optional</sup> <a name="partitionsInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput"></a>

```java
public java.lang.Object getPartitionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>>

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a>

---


### CleanRoomAssetTableLocalDetailsPartitionsList <a name="CleanRoomAssetTableLocalDetailsPartitionsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableLocalDetailsPartitionsList;

new CleanRoomAssetTableLocalDetailsPartitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.get"></a>

```java
public CleanRoomAssetTableLocalDetailsPartitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>>

---


### CleanRoomAssetTableLocalDetailsPartitionsOutputReference <a name="CleanRoomAssetTableLocalDetailsPartitionsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference;

new CleanRoomAssetTableLocalDetailsPartitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue"></a>

```java
public void putValue(IResolvable OR java.util.List<CleanRoomAssetTableLocalDetailsPartitionsValue> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList">CleanRoomAssetTableLocalDetailsPartitionsValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput">valueInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value"></a>

```java
public CleanRoomAssetTableLocalDetailsPartitionsValueList getValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList">CleanRoomAssetTableLocalDetailsPartitionsValueList</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput"></a>

```java
public java.lang.Object getValueInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>

---


### CleanRoomAssetTableLocalDetailsPartitionsValueList <a name="CleanRoomAssetTableLocalDetailsPartitionsValueList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableLocalDetailsPartitionsValueList;

new CleanRoomAssetTableLocalDetailsPartitionsValueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.get"></a>

```java
public CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>>

---


### CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference <a name="CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference;

new CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp">resetOp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey">resetRecipientPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOp` <a name="resetOp" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp"></a>

```java
public void resetOp()
```

##### `resetRecipientPropertyKey` <a name="resetRecipientPropertyKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey"></a>

```java
public void resetRecipientPropertyKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput">opInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput">recipientPropertyKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op">op</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey">recipientPropertyKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `opInput`<sup>Optional</sup> <a name="opInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput"></a>

```java
public java.lang.String getOpInput();
```

- *Type:* java.lang.String

---

##### `recipientPropertyKeyInput`<sup>Optional</sup> <a name="recipientPropertyKeyInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput"></a>

```java
public java.lang.String getRecipientPropertyKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op"></a>

```java
public java.lang.String getOp();
```

- *Type:* java.lang.String

---

##### `recipientPropertyKey`<sup>Required</sup> <a name="recipientPropertyKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey"></a>

```java
public java.lang.String getRecipientPropertyKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>

---


### CleanRoomAssetTableOutputReference <a name="CleanRoomAssetTableOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetTableOutputReference;

new CleanRoomAssetTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList">CleanRoomAssetTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.columns"></a>

```java
public CleanRoomAssetTableColumnsList getColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList">CleanRoomAssetTableColumnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a>

---


### CleanRoomAssetViewColumnsList <a name="CleanRoomAssetViewColumnsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetViewColumnsList;

new CleanRoomAssetViewColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.get"></a>

```java
public CleanRoomAssetViewColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns">CleanRoomAssetViewColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns">CleanRoomAssetViewColumns</a>>

---


### CleanRoomAssetViewColumnsMaskOutputReference <a name="CleanRoomAssetViewColumnsMaskOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetViewColumnsMaskOutputReference;

new CleanRoomAssetViewColumnsMaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName">resetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames">resetUsingColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionName` <a name="resetFunctionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName"></a>

```java
public void resetFunctionName()
```

##### `resetUsingColumnNames` <a name="resetUsingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames"></a>

```java
public void resetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput">usingColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `usingColumnNamesInput`<sup>Optional</sup> <a name="usingColumnNamesInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `usingColumnNames`<sup>Required</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a>

---


### CleanRoomAssetViewColumnsOutputReference <a name="CleanRoomAssetViewColumnsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetViewColumnsOutputReference;

new CleanRoomAssetViewColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.putMask">putMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetMask">resetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetPartitionIndex">resetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeText">resetTypeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMask` <a name="putMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.putMask"></a>

```java
public void putMask(CleanRoomAssetViewColumnsMask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetMask` <a name="resetMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetMask"></a>

```java
public void resetMask()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNullable` <a name="resetNullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetNullable"></a>

```java
public void resetNullable()
```

##### `resetPartitionIndex` <a name="resetPartitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetPartitionIndex"></a>

```java
public void resetPartitionIndex()
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType"></a>

```java
public void resetTypeIntervalType()
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeJson"></a>

```java
public void resetTypeJson()
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeName"></a>

```java
public void resetTypeName()
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypePrecision"></a>

```java
public void resetTypePrecision()
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeScale"></a>

```java
public void resetTypeScale()
```

##### `resetTypeText` <a name="resetTypeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeText"></a>

```java
public void resetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference">CleanRoomAssetViewColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.maskInput">maskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nullableInput">nullableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput">partitionIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeText">typeText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns">CleanRoomAssetViewColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.mask"></a>

```java
public CleanRoomAssetViewColumnsMaskOutputReference getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference">CleanRoomAssetViewColumnsMaskOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `maskInput`<sup>Optional</sup> <a name="maskInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.maskInput"></a>

```java
public java.lang.Object getMaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nullableInput"></a>

```java
public java.lang.Object getNullableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput"></a>

```java
public java.lang.Number getPartitionIndexInput();
```

- *Type:* java.lang.Number

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput"></a>

```java
public java.lang.String getTypeIntervalTypeInput();
```

- *Type:* java.lang.String

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeJsonInput"></a>

```java
public java.lang.String getTypeJsonInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput"></a>

```java
public java.lang.Number getTypePrecisionInput();
```

- *Type:* java.lang.Number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeScaleInput"></a>

```java
public java.lang.Number getTypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeTextInput"></a>

```java
public java.lang.String getTypeTextInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.internalValue"></a>

```java
public CleanRoomAssetViewColumns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns">CleanRoomAssetViewColumns</a>

---


### CleanRoomAssetViewLocalDetailsOutputReference <a name="CleanRoomAssetViewLocalDetailsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetViewLocalDetailsOutputReference;

new CleanRoomAssetViewLocalDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput">localNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localNameInput`<sup>Optional</sup> <a name="localNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput"></a>

```java
public java.lang.String getLocalNameInput();
```

- *Type:* java.lang.String

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a>

---


### CleanRoomAssetViewOutputReference <a name="CleanRoomAssetViewOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetViewOutputReference;

new CleanRoomAssetViewOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList">CleanRoomAssetViewColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.columns"></a>

```java
public CleanRoomAssetViewColumnsList getColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList">CleanRoomAssetViewColumnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a>

---


### CleanRoomAssetVolumeLocalDetailsOutputReference <a name="CleanRoomAssetVolumeLocalDetailsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.clean_room_asset.CleanRoomAssetVolumeLocalDetailsOutputReference;

new CleanRoomAssetVolumeLocalDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput">localNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localNameInput`<sup>Optional</sup> <a name="localNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput"></a>

```java
public java.lang.String getLocalNameInput();
```

- *Type:* java.lang.String

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a>

---



