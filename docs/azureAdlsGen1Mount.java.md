# `databricks_azure_adls_gen1_mount`

Refer to the Terraform Registory for docs: [`databricks_azure_adls_gen1_mount`](https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount).

# `azureAdlsGen1Mount` Submodule <a name="`azureAdlsGen1Mount` Submodule" id="@cdktf/provider-databricks.azureAdlsGen1Mount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureAdlsGen1Mount <a name="AzureAdlsGen1Mount" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount databricks_azure_adls_gen1_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_adls_gen1_mount.AzureAdlsGen1Mount;

AzureAdlsGen1Mount.Builder.create(Construct scope, java.lang.String id)
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
    .mountName(java.lang.String)
    .storageResourceName(java.lang.String)
    .tenantId(java.lang.String)
//  .clusterId(java.lang.String)
//  .directory(java.lang.String)
//  .id(java.lang.String)
//  .sparkConfPrefix(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clientSecretKey">clientSecretKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clientSecretScope">clientSecretScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.mountName">mountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.storageResourceName">storageResourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.directory">directory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.sparkConfPrefix">sparkConfPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}.

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clientSecretKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}.

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clientSecretScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}.

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.mountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}.

---

##### `storageResourceName`<sup>Required</sup> <a name="storageResourceName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.storageResourceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.directory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sparkConfPrefix`<sup>Optional</sup> <a name="sparkConfPrefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.Initializer.parameter.sparkConfPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetSparkConfPrefix">resetSparkConfPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetClusterId"></a>

```java
public void resetClusterId()
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetId"></a>

```java
public void resetId()
```

##### `resetSparkConfPrefix` <a name="resetSparkConfPrefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.resetSparkConfPrefix"></a>

```java
public void resetSparkConfPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AzureAdlsGen1Mount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_adls_gen1_mount.AzureAdlsGen1Mount;

AzureAdlsGen1Mount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_adls_gen1_mount.AzureAdlsGen1Mount;

AzureAdlsGen1Mount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_adls_gen1_mount.AzureAdlsGen1Mount;

AzureAdlsGen1Mount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_adls_gen1_mount.AzureAdlsGen1Mount;

AzureAdlsGen1Mount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AzureAdlsGen1Mount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AzureAdlsGen1Mount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AzureAdlsGen1Mount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AzureAdlsGen1Mount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AzureAdlsGen1Mount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKeyInput">clientSecretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScopeInput">clientSecretScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountNameInput">mountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefixInput">sparkConfPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceNameInput">storageResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKey">clientSecretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScope">clientSecretScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountName">mountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefix">sparkConfPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceName">storageResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretKeyInput`<sup>Optional</sup> <a name="clientSecretKeyInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKeyInput"></a>

```java
public java.lang.String getClientSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `clientSecretScopeInput`<sup>Optional</sup> <a name="clientSecretScopeInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScopeInput"></a>

```java
public java.lang.String getClientSecretScopeInput();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mountNameInput`<sup>Optional</sup> <a name="mountNameInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountNameInput"></a>

```java
public java.lang.String getMountNameInput();
```

- *Type:* java.lang.String

---

##### `sparkConfPrefixInput`<sup>Optional</sup> <a name="sparkConfPrefixInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefixInput"></a>

```java
public java.lang.String getSparkConfPrefixInput();
```

- *Type:* java.lang.String

---

##### `storageResourceNameInput`<sup>Optional</sup> <a name="storageResourceNameInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceNameInput"></a>

```java
public java.lang.String getStorageResourceNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretKey"></a>

```java
public java.lang.String getClientSecretKey();
```

- *Type:* java.lang.String

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clientSecretScope"></a>

```java
public java.lang.String getClientSecretScope();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.mountName"></a>

```java
public java.lang.String getMountName();
```

- *Type:* java.lang.String

---

##### `sparkConfPrefix`<sup>Required</sup> <a name="sparkConfPrefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.sparkConfPrefix"></a>

```java
public java.lang.String getSparkConfPrefix();
```

- *Type:* java.lang.String

---

##### `storageResourceName`<sup>Required</sup> <a name="storageResourceName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.storageResourceName"></a>

```java
public java.lang.String getStorageResourceName();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1Mount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AzureAdlsGen1MountConfig <a name="AzureAdlsGen1MountConfig" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.azure_adls_gen1_mount.AzureAdlsGen1MountConfig;

AzureAdlsGen1MountConfig.builder()
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
    .mountName(java.lang.String)
    .storageResourceName(java.lang.String)
    .tenantId(java.lang.String)
//  .clusterId(java.lang.String)
//  .directory(java.lang.String)
//  .id(java.lang.String)
//  .sparkConfPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretKey">clientSecretKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretScope">clientSecretScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.mountName">mountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.storageResourceName">storageResourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.directory">directory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}. |
| <code><a href="#@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.sparkConfPrefix">sparkConfPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#client_id AzureAdlsGen1Mount#client_id}.

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretKey"></a>

```java
public java.lang.String getClientSecretKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#client_secret_key AzureAdlsGen1Mount#client_secret_key}.

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clientSecretScope"></a>

```java
public java.lang.String getClientSecretScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#client_secret_scope AzureAdlsGen1Mount#client_secret_scope}.

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.mountName"></a>

```java
public java.lang.String getMountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#mount_name AzureAdlsGen1Mount#mount_name}.

---

##### `storageResourceName`<sup>Required</sup> <a name="storageResourceName" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.storageResourceName"></a>

```java
public java.lang.String getStorageResourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#storage_resource_name AzureAdlsGen1Mount#storage_resource_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#tenant_id AzureAdlsGen1Mount#tenant_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#cluster_id AzureAdlsGen1Mount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#directory AzureAdlsGen1Mount#directory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#id AzureAdlsGen1Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sparkConfPrefix`<sup>Optional</sup> <a name="sparkConfPrefix" id="@cdktf/provider-databricks.azureAdlsGen1Mount.AzureAdlsGen1MountConfig.property.sparkConfPrefix"></a>

```java
public java.lang.String getSparkConfPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.1/docs/resources/azure_adls_gen1_mount#spark_conf_prefix AzureAdlsGen1Mount#spark_conf_prefix}.

---



