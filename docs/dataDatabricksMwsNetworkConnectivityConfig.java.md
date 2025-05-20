# `dataDatabricksMwsNetworkConnectivityConfig` Submodule <a name="`dataDatabricksMwsNetworkConnectivityConfig` Submodule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMwsNetworkConnectivityConfig <a name="DataDatabricksMwsNetworkConnectivityConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config databricks_mws_network_connectivity_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfig;

DataDatabricksMwsNetworkConnectivityConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .accountId(java.lang.String)
//  .creationTime(java.lang.Number)
//  .egressConfig(DataDatabricksMwsNetworkConnectivityConfigEgressConfig)
//  .id(java.lang.String)
//  .networkConnectivityConfigId(java.lang.String)
//  .region(java.lang.String)
//  .updatedTime(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#name DataDatabricksMwsNetworkConnectivityConfig#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#account_id DataDatabricksMwsNetworkConnectivityConfig#account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.egressConfig">egressConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | egress_config block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#id DataDatabricksMwsNetworkConnectivityConfig#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.networkConnectivityConfigId">networkConnectivityConfigId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#region DataDatabricksMwsNetworkConnectivityConfig#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.updatedTime">updatedTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#name DataDatabricksMwsNetworkConnectivityConfig#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#account_id DataDatabricksMwsNetworkConnectivityConfig#account_id}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.creationTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}.

---

##### `egressConfig`<sup>Optional</sup> <a name="egressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.egressConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

egress_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#egress_config DataDatabricksMwsNetworkConnectivityConfig#egress_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#id DataDatabricksMwsNetworkConnectivityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConnectivityConfigId`<sup>Optional</sup> <a name="networkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.networkConnectivityConfigId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#region DataDatabricksMwsNetworkConnectivityConfig#region}.

---

##### `updatedTime`<sup>Optional</sup> <a name="updatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.updatedTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.putEgressConfig">putEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetEgressConfig">resetEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetNetworkConnectivityConfigId">resetNetworkConnectivityConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetUpdatedTime">resetUpdatedTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEgressConfig` <a name="putEgressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.putEgressConfig"></a>

```java
public void putEgressConfig(DataDatabricksMwsNetworkConnectivityConfigEgressConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.putEgressConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetCreationTime"></a>

```java
public void resetCreationTime()
```

##### `resetEgressConfig` <a name="resetEgressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetEgressConfig"></a>

```java
public void resetEgressConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkConnectivityConfigId` <a name="resetNetworkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetNetworkConnectivityConfigId"></a>

```java
public void resetNetworkConnectivityConfigId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetUpdatedTime` <a name="resetUpdatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetUpdatedTime"></a>

```java
public void resetUpdatedTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksMwsNetworkConnectivityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfig;

DataDatabricksMwsNetworkConnectivityConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfig;

DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfig;

DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfig;

DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksMwsNetworkConnectivityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksMwsNetworkConnectivityConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksMwsNetworkConnectivityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMwsNetworkConnectivityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfig">egressConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTimeInput">creationTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfigInput">egressConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigIdInput">networkConnectivityConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTimeInput">updatedTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigId">networkConnectivityConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTime">updatedTime</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `egressConfig`<sup>Required</sup> <a name="egressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfig"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference getEgressConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTimeInput"></a>

```java
public java.lang.Number getCreationTimeInput();
```

- *Type:* java.lang.Number

---

##### `egressConfigInput`<sup>Optional</sup> <a name="egressConfigInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfigInput"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfig getEgressConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConnectivityConfigIdInput`<sup>Optional</sup> <a name="networkConnectivityConfigIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigIdInput"></a>

```java
public java.lang.String getNetworkConnectivityConfigIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `updatedTimeInput`<sup>Optional</sup> <a name="updatedTimeInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTimeInput"></a>

```java
public java.lang.Number getUpdatedTimeInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkConnectivityConfigId`<sup>Required</sup> <a name="networkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigId"></a>

```java
public java.lang.String getNetworkConnectivityConfigId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `updatedTime`<sup>Required</sup> <a name="updatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTime"></a>

```java
public java.lang.Number getUpdatedTime();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMwsNetworkConnectivityConfigConfig <a name="DataDatabricksMwsNetworkConnectivityConfigConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigConfig;

DataDatabricksMwsNetworkConnectivityConfigConfig.builder()
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
//  .accountId(java.lang.String)
//  .creationTime(java.lang.Number)
//  .egressConfig(DataDatabricksMwsNetworkConnectivityConfigEgressConfig)
//  .id(java.lang.String)
//  .networkConnectivityConfigId(java.lang.String)
//  .region(java.lang.String)
//  .updatedTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#name DataDatabricksMwsNetworkConnectivityConfig#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#account_id DataDatabricksMwsNetworkConnectivityConfig#account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.egressConfig">egressConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | egress_config block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#id DataDatabricksMwsNetworkConnectivityConfig#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.networkConnectivityConfigId">networkConnectivityConfigId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#region DataDatabricksMwsNetworkConnectivityConfig#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.updatedTime">updatedTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#name DataDatabricksMwsNetworkConnectivityConfig#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#account_id DataDatabricksMwsNetworkConnectivityConfig#account_id}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}.

---

##### `egressConfig`<sup>Optional</sup> <a name="egressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.egressConfig"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfig getEgressConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

egress_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#egress_config DataDatabricksMwsNetworkConnectivityConfig#egress_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#id DataDatabricksMwsNetworkConnectivityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConnectivityConfigId`<sup>Optional</sup> <a name="networkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.networkConnectivityConfigId"></a>

```java
public java.lang.String getNetworkConnectivityConfigId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#region DataDatabricksMwsNetworkConnectivityConfig#region}.

---

##### `updatedTime`<sup>Optional</sup> <a name="updatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.updatedTime"></a>

```java
public java.lang.Number getUpdatedTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}.

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfig <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigEgressConfig;

DataDatabricksMwsNetworkConnectivityConfigEgressConfig.builder()
//  .defaultRules(DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules)
//  .targetRules(DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.defaultRules">defaultRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | default_rules block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.targetRules">targetRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | target_rules block. |

---

##### `defaultRules`<sup>Optional</sup> <a name="defaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.defaultRules"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules getDefaultRules();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

default_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#default_rules DataDatabricksMwsNetworkConnectivityConfig#default_rules}

---

##### `targetRules`<sup>Optional</sup> <a name="targetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.targetRules"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules getTargetRules();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

target_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#target_rules DataDatabricksMwsNetworkConnectivityConfig#target_rules}

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules;

DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.builder()
//  .awsStableIpRule(DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule)
//  .azureServiceEndpointRule(DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.awsStableIpRule">awsStableIpRule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | aws_stable_ip_rule block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.azureServiceEndpointRule">azureServiceEndpointRule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | azure_service_endpoint_rule block. |

---

##### `awsStableIpRule`<sup>Optional</sup> <a name="awsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.awsStableIpRule"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule getAwsStableIpRule();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

aws_stable_ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#aws_stable_ip_rule DataDatabricksMwsNetworkConnectivityConfig#aws_stable_ip_rule}

---

##### `azureServiceEndpointRule`<sup>Optional</sup> <a name="azureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.azureServiceEndpointRule"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule getAzureServiceEndpointRule();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

azure_service_endpoint_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#azure_service_endpoint_rule DataDatabricksMwsNetworkConnectivityConfig#azure_service_endpoint_rule}

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule;

DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.builder()
//  .cidrBlocks(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.property.cidrBlocks">cidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#cidr_blocks DataDatabricksMwsNetworkConnectivityConfig#cidr_blocks}. |

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.property.cidrBlocks"></a>

```java
public java.util.List<java.lang.String> getCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#cidr_blocks DataDatabricksMwsNetworkConnectivityConfig#cidr_blocks}.

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule;

DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.builder()
//  .subnets(java.util.List<java.lang.String>)
//  .targetRegion(java.lang.String)
//  .targetServices(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#subnets DataDatabricksMwsNetworkConnectivityConfig#subnets}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetRegion">targetRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#target_region DataDatabricksMwsNetworkConnectivityConfig#target_region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetServices">targetServices</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#target_services DataDatabricksMwsNetworkConnectivityConfig#target_services}. |

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#subnets DataDatabricksMwsNetworkConnectivityConfig#subnets}.

---

##### `targetRegion`<sup>Optional</sup> <a name="targetRegion" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetRegion"></a>

```java
public java.lang.String getTargetRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#target_region DataDatabricksMwsNetworkConnectivityConfig#target_region}.

---

##### `targetServices`<sup>Optional</sup> <a name="targetServices" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetServices"></a>

```java
public java.util.List<java.lang.String> getTargetServices();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#target_services DataDatabricksMwsNetworkConnectivityConfig#target_services}.

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules;

DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules.builder()
//  .azurePrivateEndpointRules(IResolvable)
//  .azurePrivateEndpointRules(java.util.List<DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules.property.azurePrivateEndpointRules">azurePrivateEndpointRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>></code> | azure_private_endpoint_rules block. |

---

##### `azurePrivateEndpointRules`<sup>Optional</sup> <a name="azurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules.property.azurePrivateEndpointRules"></a>

```java
public java.lang.Object getAzurePrivateEndpointRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>>

azure_private_endpoint_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#azure_private_endpoint_rules DataDatabricksMwsNetworkConnectivityConfig#azure_private_endpoint_rules}

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules;

DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.builder()
//  .connectionState(java.lang.String)
//  .creationTime(java.lang.Number)
//  .deactivated(java.lang.Boolean)
//  .deactivated(IResolvable)
//  .deactivatedAt(java.lang.Number)
//  .domainNames(java.util.List<java.lang.String>)
//  .endpointName(java.lang.String)
//  .groupId(java.lang.String)
//  .networkConnectivityConfigId(java.lang.String)
//  .resourceId(java.lang.String)
//  .ruleId(java.lang.String)
//  .updatedTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.connectionState">connectionState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#connection_state DataDatabricksMwsNetworkConnectivityConfig#connection_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivated">deactivated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#deactivated DataDatabricksMwsNetworkConnectivityConfig#deactivated}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivatedAt">deactivatedAt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#deactivated_at DataDatabricksMwsNetworkConnectivityConfig#deactivated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.domainNames">domainNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#domain_names DataDatabricksMwsNetworkConnectivityConfig#domain_names}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#endpoint_name DataDatabricksMwsNetworkConnectivityConfig#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#group_id DataDatabricksMwsNetworkConnectivityConfig#group_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.networkConnectivityConfigId">networkConnectivityConfigId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#resource_id DataDatabricksMwsNetworkConnectivityConfig#resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#rule_id DataDatabricksMwsNetworkConnectivityConfig#rule_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.updatedTime">updatedTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}. |

---

##### `connectionState`<sup>Optional</sup> <a name="connectionState" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.connectionState"></a>

```java
public java.lang.String getConnectionState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#connection_state DataDatabricksMwsNetworkConnectivityConfig#connection_state}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}.

---

##### `deactivated`<sup>Optional</sup> <a name="deactivated" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivated"></a>

```java
public java.lang.Object getDeactivated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#deactivated DataDatabricksMwsNetworkConnectivityConfig#deactivated}.

---

##### `deactivatedAt`<sup>Optional</sup> <a name="deactivatedAt" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivatedAt"></a>

```java
public java.lang.Number getDeactivatedAt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#deactivated_at DataDatabricksMwsNetworkConnectivityConfig#deactivated_at}.

---

##### `domainNames`<sup>Optional</sup> <a name="domainNames" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.domainNames"></a>

```java
public java.util.List<java.lang.String> getDomainNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#domain_names DataDatabricksMwsNetworkConnectivityConfig#domain_names}.

---

##### `endpointName`<sup>Optional</sup> <a name="endpointName" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#endpoint_name DataDatabricksMwsNetworkConnectivityConfig#endpoint_name}.

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#group_id DataDatabricksMwsNetworkConnectivityConfig#group_id}.

---

##### `networkConnectivityConfigId`<sup>Optional</sup> <a name="networkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.networkConnectivityConfigId"></a>

```java
public java.lang.String getNetworkConnectivityConfigId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#resource_id DataDatabricksMwsNetworkConnectivityConfig#resource_id}.

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#rule_id DataDatabricksMwsNetworkConnectivityConfig#rule_id}.

---

##### `updatedTime`<sup>Optional</sup> <a name="updatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.updatedTime"></a>

```java
public java.lang.Number getUpdatedTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference;

new DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resetCidrBlocks"></a>

```java
public void resetCidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocks">cidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocks"></a>

```java
public java.util.List<java.lang.String> getCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.internalValue"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference;

new DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetRegion">resetTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetServices">resetTargetServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```

##### `resetTargetRegion` <a name="resetTargetRegion" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetRegion"></a>

```java
public void resetTargetRegion()
```

##### `resetTargetServices` <a name="resetTargetServices" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetServices"></a>

```java
public void resetTargetServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegionInput">targetRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServicesInput">targetServicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegion">targetRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServices">targetServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetRegionInput`<sup>Optional</sup> <a name="targetRegionInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegionInput"></a>

```java
public java.lang.String getTargetRegionInput();
```

- *Type:* java.lang.String

---

##### `targetServicesInput`<sup>Optional</sup> <a name="targetServicesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServicesInput"></a>

```java
public java.util.List<java.lang.String> getTargetServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetRegion`<sup>Required</sup> <a name="targetRegion" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegion"></a>

```java
public java.lang.String getTargetRegion();
```

- *Type:* java.lang.String

---

##### `targetServices`<sup>Required</sup> <a name="targetServices" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServices"></a>

```java
public java.util.List<java.lang.String> getTargetServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.internalValue"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference;

new DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule">putAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule">putAzureServiceEndpointRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAwsStableIpRule">resetAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAzureServiceEndpointRule">resetAzureServiceEndpointRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsStableIpRule` <a name="putAwsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule"></a>

```java
public void putAwsStableIpRule(DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---

##### `putAzureServiceEndpointRule` <a name="putAzureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule"></a>

```java
public void putAzureServiceEndpointRule(DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---

##### `resetAwsStableIpRule` <a name="resetAwsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAwsStableIpRule"></a>

```java
public void resetAwsStableIpRule()
```

##### `resetAzureServiceEndpointRule` <a name="resetAzureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAzureServiceEndpointRule"></a>

```java
public void resetAzureServiceEndpointRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRule">awsStableIpRule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRule">azureServiceEndpointRule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRuleInput">awsStableIpRuleInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRuleInput">azureServiceEndpointRuleInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsStableIpRule`<sup>Required</sup> <a name="awsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRule"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference getAwsStableIpRule();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference</a>

---

##### `azureServiceEndpointRule`<sup>Required</sup> <a name="azureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRule"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference getAzureServiceEndpointRule();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference</a>

---

##### `awsStableIpRuleInput`<sup>Optional</sup> <a name="awsStableIpRuleInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRuleInput"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule getAwsStableIpRuleInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---

##### `azureServiceEndpointRuleInput`<sup>Optional</sup> <a name="azureServiceEndpointRuleInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRuleInput"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule getAzureServiceEndpointRuleInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.internalValue"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference;

new DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules">putDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules">putTargetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetDefaultRules">resetDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetTargetRules">resetTargetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultRules` <a name="putDefaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules"></a>

```java
public void putDefaultRules(DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---

##### `putTargetRules` <a name="putTargetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules"></a>

```java
public void putTargetRules(DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---

##### `resetDefaultRules` <a name="resetDefaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetDefaultRules"></a>

```java
public void resetDefaultRules()
```

##### `resetTargetRules` <a name="resetTargetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetTargetRules"></a>

```java
public void resetTargetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRules">defaultRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRules">targetRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRulesInput">defaultRulesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRulesInput">targetRulesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultRules`<sup>Required</sup> <a name="defaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRules"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference getDefaultRules();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference</a>

---

##### `targetRules`<sup>Required</sup> <a name="targetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRules"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference getTargetRules();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference</a>

---

##### `defaultRulesInput`<sup>Optional</sup> <a name="defaultRulesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRulesInput"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules getDefaultRulesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---

##### `targetRulesInput`<sup>Optional</sup> <a name="targetRulesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRulesInput"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules getTargetRulesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.internalValue"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList;

new DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference;

new DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetConnectionState">resetConnectionState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivated">resetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivatedAt">resetDeactivatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDomainNames">resetDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetEndpointName">resetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId">resetNetworkConnectivityConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetRuleId">resetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetUpdatedTime">resetUpdatedTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionState` <a name="resetConnectionState" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetConnectionState"></a>

```java
public void resetConnectionState()
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetCreationTime"></a>

```java
public void resetCreationTime()
```

##### `resetDeactivated` <a name="resetDeactivated" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivated"></a>

```java
public void resetDeactivated()
```

##### `resetDeactivatedAt` <a name="resetDeactivatedAt" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivatedAt"></a>

```java
public void resetDeactivatedAt()
```

##### `resetDomainNames` <a name="resetDomainNames" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDomainNames"></a>

```java
public void resetDomainNames()
```

##### `resetEndpointName` <a name="resetEndpointName" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetEndpointName"></a>

```java
public void resetEndpointName()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetNetworkConnectivityConfigId` <a name="resetNetworkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId"></a>

```java
public void resetNetworkConnectivityConfigId()
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetResourceId"></a>

```java
public void resetResourceId()
```

##### `resetRuleId` <a name="resetRuleId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetRuleId"></a>

```java
public void resetRuleId()
```

##### `resetUpdatedTime` <a name="resetUpdatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetUpdatedTime"></a>

```java
public void resetUpdatedTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionStateInput">connectionStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTimeInput">creationTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAtInput">deactivatedAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedInput">deactivatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.domainNamesInput">domainNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointNameInput">endpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput">networkConnectivityConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTimeInput">updatedTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionState">connectionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivated">deactivated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAt">deactivatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.domainNames">domainNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigId">networkConnectivityConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTime">updatedTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionStateInput`<sup>Optional</sup> <a name="connectionStateInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionStateInput"></a>

```java
public java.lang.String getConnectionStateInput();
```

- *Type:* java.lang.String

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTimeInput"></a>

```java
public java.lang.Number getCreationTimeInput();
```

- *Type:* java.lang.Number

---

##### `deactivatedAtInput`<sup>Optional</sup> <a name="deactivatedAtInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAtInput"></a>

```java
public java.lang.Number getDeactivatedAtInput();
```

- *Type:* java.lang.Number

---

##### `deactivatedInput`<sup>Optional</sup> <a name="deactivatedInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedInput"></a>

```java
public java.lang.Object getDeactivatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainNamesInput`<sup>Optional</sup> <a name="domainNamesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.domainNamesInput"></a>

```java
public java.util.List<java.lang.String> getDomainNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointNameInput"></a>

```java
public java.lang.String getEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `networkConnectivityConfigIdInput`<sup>Optional</sup> <a name="networkConnectivityConfigIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput"></a>

```java
public java.lang.String getNetworkConnectivityConfigIdInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleIdInput"></a>

```java
public java.lang.String getRuleIdInput();
```

- *Type:* java.lang.String

---

##### `updatedTimeInput`<sup>Optional</sup> <a name="updatedTimeInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTimeInput"></a>

```java
public java.lang.Number getUpdatedTimeInput();
```

- *Type:* java.lang.Number

---

##### `connectionState`<sup>Required</sup> <a name="connectionState" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionState"></a>

```java
public java.lang.String getConnectionState();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

---

##### `deactivated`<sup>Required</sup> <a name="deactivated" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivated"></a>

```java
public java.lang.Object getDeactivated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deactivatedAt`<sup>Required</sup> <a name="deactivatedAt" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAt"></a>

```java
public java.lang.Number getDeactivatedAt();
```

- *Type:* java.lang.Number

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.domainNames"></a>

```java
public java.util.List<java.lang.String> getDomainNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `networkConnectivityConfigId`<sup>Required</sup> <a name="networkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigId"></a>

```java
public java.lang.String getNetworkConnectivityConfigId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `updatedTime`<sup>Required</sup> <a name="updatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTime"></a>

```java
public java.lang.Number getUpdatedTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_mws_network_connectivity_config.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference;

new DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules">putAzurePrivateEndpointRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAzurePrivateEndpointRules">resetAzurePrivateEndpointRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzurePrivateEndpointRules` <a name="putAzurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules"></a>

```java
public void putAzurePrivateEndpointRules(IResolvable OR java.util.List<DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>>

---

##### `resetAzurePrivateEndpointRules` <a name="resetAzurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAzurePrivateEndpointRules"></a>

```java
public void resetAzurePrivateEndpointRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRules">azurePrivateEndpointRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRulesInput">azurePrivateEndpointRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azurePrivateEndpointRules`<sup>Required</sup> <a name="azurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRules"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList getAzurePrivateEndpointRules();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList</a>

---

##### `azurePrivateEndpointRulesInput`<sup>Optional</sup> <a name="azurePrivateEndpointRulesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRulesInput"></a>

```java
public java.lang.Object getAzurePrivateEndpointRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.internalValue"></a>

```java
public DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---



