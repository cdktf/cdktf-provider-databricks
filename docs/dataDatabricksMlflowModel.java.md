# `dataDatabricksMlflowModel` Submodule <a name="`dataDatabricksMlflowModel` Submodule" id="@cdktf/provider-databricks.dataDatabricksMlflowModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMlflowModel <a name="DataDatabricksMlflowModel" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model databricks_mlflow_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModel;

DataDatabricksMlflowModel.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .description(java.lang.String)
//  .latestVersions(IResolvable)
//  .latestVersions(java.util.List<DataDatabricksMlflowModelLatestVersions>)
//  .permissionLevel(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<DataDatabricksMlflowModelTags>)
//  .userId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#name DataDatabricksMlflowModel#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#description DataDatabricksMlflowModel#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.latestVersions">latestVersions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions">DataDatabricksMlflowModelLatestVersions</a>></code> | latest_versions block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.permissionLevel">permissionLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#permission_level DataDatabricksMlflowModel#permission_level}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags">DataDatabricksMlflowModelTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#user_id DataDatabricksMlflowModel#user_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#name DataDatabricksMlflowModel#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#description DataDatabricksMlflowModel#description}.

---

##### `latestVersions`<sup>Optional</sup> <a name="latestVersions" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.latestVersions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions">DataDatabricksMlflowModelLatestVersions</a>>

latest_versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#latest_versions DataDatabricksMlflowModel#latest_versions}

---

##### `permissionLevel`<sup>Optional</sup> <a name="permissionLevel" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.permissionLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#permission_level DataDatabricksMlflowModel#permission_level}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags">DataDatabricksMlflowModelTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#tags DataDatabricksMlflowModel#tags}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#user_id DataDatabricksMlflowModel#user_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.putLatestVersions">putLatestVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetLatestVersions">resetLatestVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetPermissionLevel">resetPermissionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLatestVersions` <a name="putLatestVersions" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.putLatestVersions"></a>

```java
public void putLatestVersions(IResolvable OR java.util.List<DataDatabricksMlflowModelLatestVersions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.putLatestVersions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions">DataDatabricksMlflowModelLatestVersions</a>>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<DataDatabricksMlflowModelTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags">DataDatabricksMlflowModelTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLatestVersions` <a name="resetLatestVersions" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetLatestVersions"></a>

```java
public void resetLatestVersions()
```

##### `resetPermissionLevel` <a name="resetPermissionLevel" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetPermissionLevel"></a>

```java
public void resetPermissionLevel()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetUserId"></a>

```java
public void resetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksMlflowModel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModel;

DataDatabricksMlflowModel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModel;

DataDatabricksMlflowModel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModel;

DataDatabricksMlflowModel.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModel;

DataDatabricksMlflowModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksMlflowModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksMlflowModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksMlflowModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksMlflowModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMlflowModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.latestVersions">latestVersions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList">DataDatabricksMlflowModelLatestVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList">DataDatabricksMlflowModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.latestVersionsInput">latestVersionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions">DataDatabricksMlflowModelLatestVersions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.permissionLevelInput">permissionLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags">DataDatabricksMlflowModelTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.permissionLevel">permissionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `latestVersions`<sup>Required</sup> <a name="latestVersions" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.latestVersions"></a>

```java
public DataDatabricksMlflowModelLatestVersionsList getLatestVersions();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList">DataDatabricksMlflowModelLatestVersionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.tags"></a>

```java
public DataDatabricksMlflowModelTagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList">DataDatabricksMlflowModelTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `latestVersionsInput`<sup>Optional</sup> <a name="latestVersionsInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.latestVersionsInput"></a>

```java
public java.lang.Object getLatestVersionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions">DataDatabricksMlflowModelLatestVersions</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionLevelInput`<sup>Optional</sup> <a name="permissionLevelInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.permissionLevelInput"></a>

```java
public java.lang.String getPermissionLevelInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags">DataDatabricksMlflowModelTags</a>>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `permissionLevel`<sup>Required</sup> <a name="permissionLevel" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.permissionLevel"></a>

```java
public java.lang.String getPermissionLevel();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMlflowModelConfig <a name="DataDatabricksMlflowModelConfig" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModelConfig;

DataDatabricksMlflowModelConfig.builder()
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
    .name(java.lang.String)
//  .description(java.lang.String)
//  .latestVersions(IResolvable)
//  .latestVersions(java.util.List<DataDatabricksMlflowModelLatestVersions>)
//  .permissionLevel(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<DataDatabricksMlflowModelTags>)
//  .userId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#name DataDatabricksMlflowModel#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#description DataDatabricksMlflowModel#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.latestVersions">latestVersions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions">DataDatabricksMlflowModelLatestVersions</a>></code> | latest_versions block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.permissionLevel">permissionLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#permission_level DataDatabricksMlflowModel#permission_level}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags">DataDatabricksMlflowModelTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#user_id DataDatabricksMlflowModel#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#name DataDatabricksMlflowModel#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#description DataDatabricksMlflowModel#description}.

---

##### `latestVersions`<sup>Optional</sup> <a name="latestVersions" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.latestVersions"></a>

```java
public java.lang.Object getLatestVersions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions">DataDatabricksMlflowModelLatestVersions</a>>

latest_versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#latest_versions DataDatabricksMlflowModel#latest_versions}

---

##### `permissionLevel`<sup>Optional</sup> <a name="permissionLevel" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.permissionLevel"></a>

```java
public java.lang.String getPermissionLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#permission_level DataDatabricksMlflowModel#permission_level}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags">DataDatabricksMlflowModelTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#tags DataDatabricksMlflowModel#tags}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#user_id DataDatabricksMlflowModel#user_id}.

---

### DataDatabricksMlflowModelLatestVersions <a name="DataDatabricksMlflowModelLatestVersions" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModelLatestVersions;

DataDatabricksMlflowModelLatestVersions.builder()
//  .creationTimestamp(java.lang.Number)
//  .currentStage(java.lang.String)
//  .description(java.lang.String)
//  .lastUpdatedTimestamp(java.lang.Number)
//  .name(java.lang.String)
//  .runId(java.lang.String)
//  .runLink(java.lang.String)
//  .source(java.lang.String)
//  .status(java.lang.String)
//  .statusMessage(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<DataDatabricksMlflowModelLatestVersionsTags>)
//  .userId(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#creation_timestamp DataDatabricksMlflowModel#creation_timestamp}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.currentStage">currentStage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#current_stage DataDatabricksMlflowModel#current_stage}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#description DataDatabricksMlflowModel#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#last_updated_timestamp DataDatabricksMlflowModel#last_updated_timestamp}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#name DataDatabricksMlflowModel#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.runId">runId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#run_id DataDatabricksMlflowModel#run_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.runLink">runLink</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#run_link DataDatabricksMlflowModel#run_link}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#source DataDatabricksMlflowModel#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#status DataDatabricksMlflowModel#status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#status_message DataDatabricksMlflowModel#status_message}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags">DataDatabricksMlflowModelLatestVersionsTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#user_id DataDatabricksMlflowModel#user_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#version DataDatabricksMlflowModel#version}. |

---

##### `creationTimestamp`<sup>Optional</sup> <a name="creationTimestamp" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.creationTimestamp"></a>

```java
public java.lang.Number getCreationTimestamp();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#creation_timestamp DataDatabricksMlflowModel#creation_timestamp}.

---

##### `currentStage`<sup>Optional</sup> <a name="currentStage" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.currentStage"></a>

```java
public java.lang.String getCurrentStage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#current_stage DataDatabricksMlflowModel#current_stage}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#description DataDatabricksMlflowModel#description}.

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="lastUpdatedTimestamp" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.lastUpdatedTimestamp"></a>

```java
public java.lang.Number getLastUpdatedTimestamp();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#last_updated_timestamp DataDatabricksMlflowModel#last_updated_timestamp}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#name DataDatabricksMlflowModel#name}.

---

##### `runId`<sup>Optional</sup> <a name="runId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.runId"></a>

```java
public java.lang.String getRunId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#run_id DataDatabricksMlflowModel#run_id}.

---

##### `runLink`<sup>Optional</sup> <a name="runLink" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.runLink"></a>

```java
public java.lang.String getRunLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#run_link DataDatabricksMlflowModel#run_link}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#source DataDatabricksMlflowModel#source}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#status DataDatabricksMlflowModel#status}.

---

##### `statusMessage`<sup>Optional</sup> <a name="statusMessage" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#status_message DataDatabricksMlflowModel#status_message}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags">DataDatabricksMlflowModelLatestVersionsTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#tags DataDatabricksMlflowModel#tags}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#user_id DataDatabricksMlflowModel#user_id}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#version DataDatabricksMlflowModel#version}.

---

### DataDatabricksMlflowModelLatestVersionsTags <a name="DataDatabricksMlflowModelLatestVersionsTags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModelLatestVersionsTags;

DataDatabricksMlflowModelLatestVersionsTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#key DataDatabricksMlflowModel#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#value DataDatabricksMlflowModel#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#key DataDatabricksMlflowModel#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#value DataDatabricksMlflowModel#value}.

---

### DataDatabricksMlflowModelTags <a name="DataDatabricksMlflowModelTags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModelTags;

DataDatabricksMlflowModelTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#key DataDatabricksMlflowModel#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#value DataDatabricksMlflowModel#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#key DataDatabricksMlflowModel#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/data-sources/mlflow_model#value DataDatabricksMlflowModel#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMlflowModelLatestVersionsList <a name="DataDatabricksMlflowModelLatestVersionsList" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModelLatestVersionsList;

new DataDatabricksMlflowModelLatestVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.get"></a>

```java
public DataDatabricksMlflowModelLatestVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions">DataDatabricksMlflowModelLatestVersions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions">DataDatabricksMlflowModelLatestVersions</a>>

---


### DataDatabricksMlflowModelLatestVersionsOutputReference <a name="DataDatabricksMlflowModelLatestVersionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModelLatestVersionsOutputReference;

new DataDatabricksMlflowModelLatestVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetCreationTimestamp">resetCreationTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetCurrentStage">resetCurrentStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetLastUpdatedTimestamp">resetLastUpdatedTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetRunId">resetRunId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetRunLink">resetRunLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetStatusMessage">resetStatusMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetUserId">resetUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<DataDatabricksMlflowModelLatestVersionsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags">DataDatabricksMlflowModelLatestVersionsTags</a>>

---

##### `resetCreationTimestamp` <a name="resetCreationTimestamp" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetCreationTimestamp"></a>

```java
public void resetCreationTimestamp()
```

##### `resetCurrentStage` <a name="resetCurrentStage" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetCurrentStage"></a>

```java
public void resetCurrentStage()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLastUpdatedTimestamp` <a name="resetLastUpdatedTimestamp" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetLastUpdatedTimestamp"></a>

```java
public void resetLastUpdatedTimestamp()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRunId` <a name="resetRunId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetRunId"></a>

```java
public void resetRunId()
```

##### `resetRunLink` <a name="resetRunLink" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetRunLink"></a>

```java
public void resetRunLink()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetStatusMessage` <a name="resetStatusMessage" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetStatusMessage"></a>

```java
public void resetStatusMessage()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetUserId"></a>

```java
public void resetUserId()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList">DataDatabricksMlflowModelLatestVersionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.creationTimestampInput">creationTimestampInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.currentStageInput">currentStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.lastUpdatedTimestampInput">lastUpdatedTimestampInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runIdInput">runIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runLinkInput">runLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.statusMessageInput">statusMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags">DataDatabricksMlflowModelLatestVersionsTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.currentStage">currentStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runId">runId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runLink">runLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions">DataDatabricksMlflowModelLatestVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.tags"></a>

```java
public DataDatabricksMlflowModelLatestVersionsTagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList">DataDatabricksMlflowModelLatestVersionsTagsList</a>

---

##### `creationTimestampInput`<sup>Optional</sup> <a name="creationTimestampInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.creationTimestampInput"></a>

```java
public java.lang.Number getCreationTimestampInput();
```

- *Type:* java.lang.Number

---

##### `currentStageInput`<sup>Optional</sup> <a name="currentStageInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.currentStageInput"></a>

```java
public java.lang.String getCurrentStageInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTimestampInput`<sup>Optional</sup> <a name="lastUpdatedTimestampInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.lastUpdatedTimestampInput"></a>

```java
public java.lang.Number getLastUpdatedTimestampInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `runIdInput`<sup>Optional</sup> <a name="runIdInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runIdInput"></a>

```java
public java.lang.String getRunIdInput();
```

- *Type:* java.lang.String

---

##### `runLinkInput`<sup>Optional</sup> <a name="runLinkInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runLinkInput"></a>

```java
public java.lang.String getRunLinkInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `statusMessageInput`<sup>Optional</sup> <a name="statusMessageInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.statusMessageInput"></a>

```java
public java.lang.String getStatusMessageInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags">DataDatabricksMlflowModelLatestVersionsTags</a>>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.creationTimestamp"></a>

```java
public java.lang.Number getCreationTimestamp();
```

- *Type:* java.lang.Number

---

##### `currentStage`<sup>Required</sup> <a name="currentStage" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.currentStage"></a>

```java
public java.lang.String getCurrentStage();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.lastUpdatedTimestamp"></a>

```java
public java.lang.Number getLastUpdatedTimestamp();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `runId`<sup>Required</sup> <a name="runId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runId"></a>

```java
public java.lang.String getRunId();
```

- *Type:* java.lang.String

---

##### `runLink`<sup>Required</sup> <a name="runLink" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runLink"></a>

```java
public java.lang.String getRunLink();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions">DataDatabricksMlflowModelLatestVersions</a>

---


### DataDatabricksMlflowModelLatestVersionsTagsList <a name="DataDatabricksMlflowModelLatestVersionsTagsList" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModelLatestVersionsTagsList;

new DataDatabricksMlflowModelLatestVersionsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.get"></a>

```java
public DataDatabricksMlflowModelLatestVersionsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags">DataDatabricksMlflowModelLatestVersionsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags">DataDatabricksMlflowModelLatestVersionsTags</a>>

---


### DataDatabricksMlflowModelLatestVersionsTagsOutputReference <a name="DataDatabricksMlflowModelLatestVersionsTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModelLatestVersionsTagsOutputReference;

new DataDatabricksMlflowModelLatestVersionsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags">DataDatabricksMlflowModelLatestVersionsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags">DataDatabricksMlflowModelLatestVersionsTags</a>

---


### DataDatabricksMlflowModelTagsList <a name="DataDatabricksMlflowModelTagsList" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModelTagsList;

new DataDatabricksMlflowModelTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.get"></a>

```java
public DataDatabricksMlflowModelTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags">DataDatabricksMlflowModelTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags">DataDatabricksMlflowModelTags</a>>

---


### DataDatabricksMlflowModelTagsOutputReference <a name="DataDatabricksMlflowModelTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mlflow_model.DataDatabricksMlflowModelTagsOutputReference;

new DataDatabricksMlflowModelTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags">DataDatabricksMlflowModelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags">DataDatabricksMlflowModelTags</a>

---



