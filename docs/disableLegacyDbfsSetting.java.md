# `disableLegacyDbfsSetting` Submodule <a name="`disableLegacyDbfsSetting` Submodule" id="@cdktf/provider-databricks.disableLegacyDbfsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisableLegacyDbfsSetting <a name="DisableLegacyDbfsSetting" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting databricks_disable_legacy_dbfs_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.disable_legacy_dbfs_setting.DisableLegacyDbfsSetting;

DisableLegacyDbfsSetting.Builder.create(Construct scope, java.lang.String id)
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
    .disableLegacyDbfs(DisableLegacyDbfsSettingDisableLegacyDbfs)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .settingName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.disableLegacyDbfs">disableLegacyDbfs</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a></code> | disable_legacy_dbfs block. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#etag DisableLegacyDbfsSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#id DisableLegacyDbfsSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.settingName">settingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#setting_name DisableLegacyDbfsSetting#setting_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disableLegacyDbfs`<sup>Required</sup> <a name="disableLegacyDbfs" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.disableLegacyDbfs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a>

disable_legacy_dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#disable_legacy_dbfs DisableLegacyDbfsSetting#disable_legacy_dbfs}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#etag DisableLegacyDbfsSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#id DisableLegacyDbfsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.settingName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#setting_name DisableLegacyDbfsSetting#setting_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.putDisableLegacyDbfs">putDisableLegacyDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetSettingName">resetSettingName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDisableLegacyDbfs` <a name="putDisableLegacyDbfs" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.putDisableLegacyDbfs"></a>

```java
public void putDisableLegacyDbfs(DisableLegacyDbfsSettingDisableLegacyDbfs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.putDisableLegacyDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a>

---

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetId"></a>

```java
public void resetId()
```

##### `resetSettingName` <a name="resetSettingName" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetSettingName"></a>

```java
public void resetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DisableLegacyDbfsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.disable_legacy_dbfs_setting.DisableLegacyDbfsSetting;

DisableLegacyDbfsSetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.disable_legacy_dbfs_setting.DisableLegacyDbfsSetting;

DisableLegacyDbfsSetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.disable_legacy_dbfs_setting.DisableLegacyDbfsSetting;

DisableLegacyDbfsSetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.disable_legacy_dbfs_setting.DisableLegacyDbfsSetting;

DisableLegacyDbfsSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DisableLegacyDbfsSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DisableLegacyDbfsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DisableLegacyDbfsSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DisableLegacyDbfsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DisableLegacyDbfsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.disableLegacyDbfs">disableLegacyDbfs</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference">DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.disableLegacyDbfsInput">disableLegacyDbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.settingNameInput">settingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.settingName">settingName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disableLegacyDbfs`<sup>Required</sup> <a name="disableLegacyDbfs" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.disableLegacyDbfs"></a>

```java
public DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference getDisableLegacyDbfs();
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference">DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference</a>

---

##### `disableLegacyDbfsInput`<sup>Optional</sup> <a name="disableLegacyDbfsInput" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.disableLegacyDbfsInput"></a>

```java
public DisableLegacyDbfsSettingDisableLegacyDbfs getDisableLegacyDbfsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a>

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `settingNameInput`<sup>Optional</sup> <a name="settingNameInput" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.settingNameInput"></a>

```java
public java.lang.String getSettingNameInput();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `settingName`<sup>Required</sup> <a name="settingName" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.settingName"></a>

```java
public java.lang.String getSettingName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DisableLegacyDbfsSettingConfig <a name="DisableLegacyDbfsSettingConfig" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.disable_legacy_dbfs_setting.DisableLegacyDbfsSettingConfig;

DisableLegacyDbfsSettingConfig.builder()
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
    .disableLegacyDbfs(DisableLegacyDbfsSettingDisableLegacyDbfs)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .settingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.disableLegacyDbfs">disableLegacyDbfs</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a></code> | disable_legacy_dbfs block. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#etag DisableLegacyDbfsSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#id DisableLegacyDbfsSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.settingName">settingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#setting_name DisableLegacyDbfsSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disableLegacyDbfs`<sup>Required</sup> <a name="disableLegacyDbfs" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.disableLegacyDbfs"></a>

```java
public DisableLegacyDbfsSettingDisableLegacyDbfs getDisableLegacyDbfs();
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a>

disable_legacy_dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#disable_legacy_dbfs DisableLegacyDbfsSetting#disable_legacy_dbfs}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#etag DisableLegacyDbfsSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#id DisableLegacyDbfsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.settingName"></a>

```java
public java.lang.String getSettingName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#setting_name DisableLegacyDbfsSetting#setting_name}.

---

### DisableLegacyDbfsSettingDisableLegacyDbfs <a name="DisableLegacyDbfsSettingDisableLegacyDbfs" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.disable_legacy_dbfs_setting.DisableLegacyDbfsSettingDisableLegacyDbfs;

DisableLegacyDbfsSettingDisableLegacyDbfs.builder()
    .value(java.lang.Boolean)
    .value(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs.property.value">value</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#value DisableLegacyDbfsSetting#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.73.0/docs/resources/disable_legacy_dbfs_setting#value DisableLegacyDbfsSetting#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference <a name="DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.disable_legacy_dbfs_setting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference;

new DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.value">value</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.valueInput"></a>

```java
public java.lang.Object getValueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.internalValue"></a>

```java
public DisableLegacyDbfsSettingDisableLegacyDbfs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a>

---



