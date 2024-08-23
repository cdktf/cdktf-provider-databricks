# `azureAdlsGen2Mount` Submodule <a name="`azureAdlsGen2Mount` Submodule" id="@cdktf/provider-databricks.azureAdlsGen2Mount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureAdlsGen2Mount <a name="AzureAdlsGen2Mount" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount databricks_azure_adls_gen2_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_adls_gen2_mount.AzureAdlsGen2Mount;

AzureAdlsGen2Mount.Builder.create(Construct scope, java.lang.String id)
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
    .clientId(java.lang.String)
    .clientSecretKey(java.lang.String)
    .clientSecretScope(java.lang.String)
    .containerName(java.lang.String)
    .initializeFileSystem(java.lang.Boolean)
    .initializeFileSystem(IResolvable)
    .mountName(java.lang.String)
    .storageAccountName(java.lang.String)
    .tenantId(java.lang.String)
//  .clusterId(java.lang.String)
//  .directory(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#client_id AzureAdlsGen2Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.clientSecretKey">clientSecretKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#client_secret_key AzureAdlsGen2Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.clientSecretScope">clientSecretScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#client_secret_scope AzureAdlsGen2Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#container_name AzureAdlsGen2Mount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.initializeFileSystem">initializeFileSystem</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#initialize_file_system AzureAdlsGen2Mount#initialize_file_system}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.mountName">mountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#mount_name AzureAdlsGen2Mount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#storage_account_name AzureAdlsGen2Mount#storage_account_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#tenant_id AzureAdlsGen2Mount#tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#cluster_id AzureAdlsGen2Mount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.directory">directory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#directory AzureAdlsGen2Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#id AzureAdlsGen2Mount#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#client_id AzureAdlsGen2Mount#client_id}.

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.clientSecretKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#client_secret_key AzureAdlsGen2Mount#client_secret_key}.

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.clientSecretScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#client_secret_scope AzureAdlsGen2Mount#client_secret_scope}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.containerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#container_name AzureAdlsGen2Mount#container_name}.

---

##### `initializeFileSystem`<sup>Required</sup> <a name="initializeFileSystem" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.initializeFileSystem"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#initialize_file_system AzureAdlsGen2Mount#initialize_file_system}.

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.mountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#mount_name AzureAdlsGen2Mount#mount_name}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.storageAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#storage_account_name AzureAdlsGen2Mount#storage_account_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#tenant_id AzureAdlsGen2Mount#tenant_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#cluster_id AzureAdlsGen2Mount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.directory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#directory AzureAdlsGen2Mount#directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#id AzureAdlsGen2Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetClusterId"></a>

```java
public void resetClusterId()
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AzureAdlsGen2Mount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_adls_gen2_mount.AzureAdlsGen2Mount;

AzureAdlsGen2Mount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_adls_gen2_mount.AzureAdlsGen2Mount;

AzureAdlsGen2Mount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_adls_gen2_mount.AzureAdlsGen2Mount;

AzureAdlsGen2Mount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_adls_gen2_mount.AzureAdlsGen2Mount;

AzureAdlsGen2Mount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AzureAdlsGen2Mount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AzureAdlsGen2Mount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AzureAdlsGen2Mount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AzureAdlsGen2Mount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AzureAdlsGen2Mount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKeyInput">clientSecretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScopeInput">clientSecretScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystemInput">initializeFileSystemInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountNameInput">mountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKey">clientSecretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScope">clientSecretScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystem">initializeFileSystem</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountName">mountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretKeyInput`<sup>Optional</sup> <a name="clientSecretKeyInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKeyInput"></a>

```java
public java.lang.String getClientSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `clientSecretScopeInput`<sup>Optional</sup> <a name="clientSecretScopeInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScopeInput"></a>

```java
public java.lang.String getClientSecretScopeInput();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initializeFileSystemInput`<sup>Optional</sup> <a name="initializeFileSystemInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystemInput"></a>

```java
public java.lang.Object getInitializeFileSystemInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mountNameInput`<sup>Optional</sup> <a name="mountNameInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountNameInput"></a>

```java
public java.lang.String getMountNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKey"></a>

```java
public java.lang.String getClientSecretKey();
```

- *Type:* java.lang.String

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScope"></a>

```java
public java.lang.String getClientSecretScope();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initializeFileSystem`<sup>Required</sup> <a name="initializeFileSystem" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystem"></a>

```java
public java.lang.Object getInitializeFileSystem();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountName"></a>

```java
public java.lang.String getMountName();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AzureAdlsGen2MountConfig <a name="AzureAdlsGen2MountConfig" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_adls_gen2_mount.AzureAdlsGen2MountConfig;

AzureAdlsGen2MountConfig.builder()
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
    .clientId(java.lang.String)
    .clientSecretKey(java.lang.String)
    .clientSecretScope(java.lang.String)
    .containerName(java.lang.String)
    .initializeFileSystem(java.lang.Boolean)
    .initializeFileSystem(IResolvable)
    .mountName(java.lang.String)
    .storageAccountName(java.lang.String)
    .tenantId(java.lang.String)
//  .clusterId(java.lang.String)
//  .directory(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#client_id AzureAdlsGen2Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretKey">clientSecretKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#client_secret_key AzureAdlsGen2Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretScope">clientSecretScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#client_secret_scope AzureAdlsGen2Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#container_name AzureAdlsGen2Mount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.initializeFileSystem">initializeFileSystem</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#initialize_file_system AzureAdlsGen2Mount#initialize_file_system}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.mountName">mountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#mount_name AzureAdlsGen2Mount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#storage_account_name AzureAdlsGen2Mount#storage_account_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#tenant_id AzureAdlsGen2Mount#tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#cluster_id AzureAdlsGen2Mount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.directory">directory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#directory AzureAdlsGen2Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#id AzureAdlsGen2Mount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#client_id AzureAdlsGen2Mount#client_id}.

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretKey"></a>

```java
public java.lang.String getClientSecretKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#client_secret_key AzureAdlsGen2Mount#client_secret_key}.

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretScope"></a>

```java
public java.lang.String getClientSecretScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#client_secret_scope AzureAdlsGen2Mount#client_secret_scope}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#container_name AzureAdlsGen2Mount#container_name}.

---

##### `initializeFileSystem`<sup>Required</sup> <a name="initializeFileSystem" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.initializeFileSystem"></a>

```java
public java.lang.Object getInitializeFileSystem();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#initialize_file_system AzureAdlsGen2Mount#initialize_file_system}.

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.mountName"></a>

```java
public java.lang.String getMountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#mount_name AzureAdlsGen2Mount#mount_name}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#storage_account_name AzureAdlsGen2Mount#storage_account_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#tenant_id AzureAdlsGen2Mount#tenant_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#cluster_id AzureAdlsGen2Mount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#directory AzureAdlsGen2Mount#directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_adls_gen2_mount#id AzureAdlsGen2Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



