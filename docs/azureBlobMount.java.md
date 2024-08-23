# `azureBlobMount` Submodule <a name="`azureBlobMount` Submodule" id="@cdktf/provider-databricks.azureBlobMount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureBlobMount <a name="AzureBlobMount" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount databricks_azure_blob_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_blob_mount.AzureBlobMount;

AzureBlobMount.Builder.create(Construct scope, java.lang.String id)
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
    .authType(java.lang.String)
    .containerName(java.lang.String)
    .mountName(java.lang.String)
    .storageAccountName(java.lang.String)
    .tokenSecretKey(java.lang.String)
    .tokenSecretScope(java.lang.String)
//  .clusterId(java.lang.String)
//  .directory(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.mountName">mountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.tokenSecretKey">tokenSecretKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.tokenSecretScope">tokenSecretScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.directory">directory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#id AzureBlobMount#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.authType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.containerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}.

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.mountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.storageAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}.

---

##### `tokenSecretKey`<sup>Required</sup> <a name="tokenSecretKey" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.tokenSecretKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}.

---

##### `tokenSecretScope`<sup>Required</sup> <a name="tokenSecretScope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.tokenSecretScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.directory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#id AzureBlobMount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetClusterId"></a>

```java
public void resetClusterId()
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AzureBlobMount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_blob_mount.AzureBlobMount;

AzureBlobMount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_blob_mount.AzureBlobMount;

AzureBlobMount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_blob_mount.AzureBlobMount;

AzureBlobMount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_blob_mount.AzureBlobMount;

AzureBlobMount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AzureBlobMount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AzureBlobMount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AzureBlobMount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AzureBlobMount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AzureBlobMount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountNameInput">mountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKeyInput">tokenSecretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScopeInput">tokenSecretScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountName">mountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKey">tokenSecretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScope">tokenSecretScope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mountNameInput`<sup>Optional</sup> <a name="mountNameInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountNameInput"></a>

```java
public java.lang.String getMountNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `tokenSecretKeyInput`<sup>Optional</sup> <a name="tokenSecretKeyInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKeyInput"></a>

```java
public java.lang.String getTokenSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `tokenSecretScopeInput`<sup>Optional</sup> <a name="tokenSecretScopeInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScopeInput"></a>

```java
public java.lang.String getTokenSecretScopeInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountName"></a>

```java
public java.lang.String getMountName();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `tokenSecretKey`<sup>Required</sup> <a name="tokenSecretKey" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKey"></a>

```java
public java.lang.String getTokenSecretKey();
```

- *Type:* java.lang.String

---

##### `tokenSecretScope`<sup>Required</sup> <a name="tokenSecretScope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScope"></a>

```java
public java.lang.String getTokenSecretScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AzureBlobMountConfig <a name="AzureBlobMountConfig" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_blob_mount.AzureBlobMountConfig;

AzureBlobMountConfig.builder()
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
    .authType(java.lang.String)
    .containerName(java.lang.String)
    .mountName(java.lang.String)
    .storageAccountName(java.lang.String)
    .tokenSecretKey(java.lang.String)
    .tokenSecretScope(java.lang.String)
//  .clusterId(java.lang.String)
//  .directory(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.mountName">mountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretKey">tokenSecretKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretScope">tokenSecretScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.directory">directory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#id AzureBlobMount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}.

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.mountName"></a>

```java
public java.lang.String getMountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}.

---

##### `tokenSecretKey`<sup>Required</sup> <a name="tokenSecretKey" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretKey"></a>

```java
public java.lang.String getTokenSecretKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}.

---

##### `tokenSecretScope`<sup>Required</sup> <a name="tokenSecretScope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretScope"></a>

```java
public java.lang.String getTokenSecretScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#id AzureBlobMount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



