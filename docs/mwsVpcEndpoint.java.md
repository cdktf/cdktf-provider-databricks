# `databricks_mws_vpc_endpoint`

Refer to the Terraform Registory for docs: [`databricks_mws_vpc_endpoint`](https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint).

# `mwsVpcEndpoint` Submodule <a name="`mwsVpcEndpoint` Submodule" id="@cdktf/provider-databricks.mwsVpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsVpcEndpoint <a name="MwsVpcEndpoint" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint databricks_mws_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_vpc_endpoint.MwsVpcEndpoint;

MwsVpcEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .vpcEndpointName(java.lang.String)
//  .accountId(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .awsEndpointServiceId(java.lang.String)
//  .awsVpcEndpointId(java.lang.String)
//  .gcpVpcEndpointInfo(MwsVpcEndpointGcpVpcEndpointInfo)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .state(java.lang.String)
//  .useCase(java.lang.String)
//  .vpcEndpointId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.vpcEndpointName">vpcEndpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.awsEndpointServiceId">awsEndpointServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.awsVpcEndpointId">awsVpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.gcpVpcEndpointInfo">gcpVpcEndpointInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a></code> | gcp_vpc_endpoint_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#id MwsVpcEndpoint#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#region MwsVpcEndpoint#region}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#state MwsVpcEndpoint#state}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.useCase">useCase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vpcEndpointName`<sup>Required</sup> <a name="vpcEndpointName" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.vpcEndpointName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}.

---

##### `awsEndpointServiceId`<sup>Optional</sup> <a name="awsEndpointServiceId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.awsEndpointServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}.

---

##### `awsVpcEndpointId`<sup>Optional</sup> <a name="awsVpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.awsVpcEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}.

---

##### `gcpVpcEndpointInfo`<sup>Optional</sup> <a name="gcpVpcEndpointInfo" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.gcpVpcEndpointInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a>

gcp_vpc_endpoint_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#gcp_vpc_endpoint_info MwsVpcEndpoint#gcp_vpc_endpoint_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#id MwsVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#region MwsVpcEndpoint#region}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#state MwsVpcEndpoint#state}.

---

##### `useCase`<sup>Optional</sup> <a name="useCase" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.useCase"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.vpcEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.putGcpVpcEndpointInfo">putGcpVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsEndpointServiceId">resetAwsEndpointServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsVpcEndpointId">resetAwsVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetGcpVpcEndpointInfo">resetGcpVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetUseCase">resetUseCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putGcpVpcEndpointInfo` <a name="putGcpVpcEndpointInfo" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.putGcpVpcEndpointInfo"></a>

```java
public void putGcpVpcEndpointInfo(MwsVpcEndpointGcpVpcEndpointInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.putGcpVpcEndpointInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetAwsEndpointServiceId` <a name="resetAwsEndpointServiceId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsEndpointServiceId"></a>

```java
public void resetAwsEndpointServiceId()
```

##### `resetAwsVpcEndpointId` <a name="resetAwsVpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsVpcEndpointId"></a>

```java
public void resetAwsVpcEndpointId()
```

##### `resetGcpVpcEndpointInfo` <a name="resetGcpVpcEndpointInfo" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetGcpVpcEndpointInfo"></a>

```java
public void resetGcpVpcEndpointInfo()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetState"></a>

```java
public void resetState()
```

##### `resetUseCase` <a name="resetUseCase" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetUseCase"></a>

```java
public void resetUseCase()
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetVpcEndpointId"></a>

```java
public void resetVpcEndpointId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MwsVpcEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_vpc_endpoint.MwsVpcEndpoint;

MwsVpcEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_vpc_endpoint.MwsVpcEndpoint;

MwsVpcEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_vpc_endpoint.MwsVpcEndpoint;

MwsVpcEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_vpc_endpoint.MwsVpcEndpoint;

MwsVpcEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MwsVpcEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MwsVpcEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MwsVpcEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MwsVpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MwsVpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.gcpVpcEndpointInfo">gcpVpcEndpointInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference">MwsVpcEndpointGcpVpcEndpointInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceIdInput">awsEndpointServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointIdInput">awsVpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.gcpVpcEndpointInfoInput">gcpVpcEndpointInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCaseInput">useCaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointNameInput">vpcEndpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceId">awsEndpointServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointId">awsVpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCase">useCase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointName">vpcEndpointName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gcpVpcEndpointInfo`<sup>Required</sup> <a name="gcpVpcEndpointInfo" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.gcpVpcEndpointInfo"></a>

```java
public MwsVpcEndpointGcpVpcEndpointInfoOutputReference getGcpVpcEndpointInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference">MwsVpcEndpointGcpVpcEndpointInfoOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `awsEndpointServiceIdInput`<sup>Optional</sup> <a name="awsEndpointServiceIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceIdInput"></a>

```java
public java.lang.String getAwsEndpointServiceIdInput();
```

- *Type:* java.lang.String

---

##### `awsVpcEndpointIdInput`<sup>Optional</sup> <a name="awsVpcEndpointIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointIdInput"></a>

```java
public java.lang.String getAwsVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `gcpVpcEndpointInfoInput`<sup>Optional</sup> <a name="gcpVpcEndpointInfoInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.gcpVpcEndpointInfoInput"></a>

```java
public MwsVpcEndpointGcpVpcEndpointInfo getGcpVpcEndpointInfoInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `useCaseInput`<sup>Optional</sup> <a name="useCaseInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCaseInput"></a>

```java
public java.lang.String getUseCaseInput();
```

- *Type:* java.lang.String

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointIdInput"></a>

```java
public java.lang.String getVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `vpcEndpointNameInput`<sup>Optional</sup> <a name="vpcEndpointNameInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointNameInput"></a>

```java
public java.lang.String getVpcEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `awsEndpointServiceId`<sup>Required</sup> <a name="awsEndpointServiceId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceId"></a>

```java
public java.lang.String getAwsEndpointServiceId();
```

- *Type:* java.lang.String

---

##### `awsVpcEndpointId`<sup>Required</sup> <a name="awsVpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointId"></a>

```java
public java.lang.String getAwsVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `useCase`<sup>Required</sup> <a name="useCase" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCase"></a>

```java
public java.lang.String getUseCase();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `vpcEndpointName`<sup>Required</sup> <a name="vpcEndpointName" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointName"></a>

```java
public java.lang.String getVpcEndpointName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MwsVpcEndpointConfig <a name="MwsVpcEndpointConfig" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_vpc_endpoint.MwsVpcEndpointConfig;

MwsVpcEndpointConfig.builder()
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
    .vpcEndpointName(java.lang.String)
//  .accountId(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .awsEndpointServiceId(java.lang.String)
//  .awsVpcEndpointId(java.lang.String)
//  .gcpVpcEndpointInfo(MwsVpcEndpointGcpVpcEndpointInfo)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .state(java.lang.String)
//  .useCase(java.lang.String)
//  .vpcEndpointId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointName">vpcEndpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsEndpointServiceId">awsEndpointServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsVpcEndpointId">awsVpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.gcpVpcEndpointInfo">gcpVpcEndpointInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a></code> | gcp_vpc_endpoint_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#id MwsVpcEndpoint#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#region MwsVpcEndpoint#region}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#state MwsVpcEndpoint#state}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.useCase">useCase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vpcEndpointName`<sup>Required</sup> <a name="vpcEndpointName" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointName"></a>

```java
public java.lang.String getVpcEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}.

---

##### `awsEndpointServiceId`<sup>Optional</sup> <a name="awsEndpointServiceId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsEndpointServiceId"></a>

```java
public java.lang.String getAwsEndpointServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}.

---

##### `awsVpcEndpointId`<sup>Optional</sup> <a name="awsVpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsVpcEndpointId"></a>

```java
public java.lang.String getAwsVpcEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}.

---

##### `gcpVpcEndpointInfo`<sup>Optional</sup> <a name="gcpVpcEndpointInfo" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.gcpVpcEndpointInfo"></a>

```java
public MwsVpcEndpointGcpVpcEndpointInfo getGcpVpcEndpointInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a>

gcp_vpc_endpoint_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#gcp_vpc_endpoint_info MwsVpcEndpoint#gcp_vpc_endpoint_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#id MwsVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#region MwsVpcEndpoint#region}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#state MwsVpcEndpoint#state}.

---

##### `useCase`<sup>Optional</sup> <a name="useCase" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.useCase"></a>

```java
public java.lang.String getUseCase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}.

---

### MwsVpcEndpointGcpVpcEndpointInfo <a name="MwsVpcEndpointGcpVpcEndpointInfo" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_vpc_endpoint.MwsVpcEndpointGcpVpcEndpointInfo;

MwsVpcEndpointGcpVpcEndpointInfo.builder()
    .endpointRegion(java.lang.String)
    .projectId(java.lang.String)
    .pscEndpointName(java.lang.String)
//  .pscConnectionId(java.lang.String)
//  .serviceAttachmentId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.endpointRegion">endpointRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#endpoint_region MwsVpcEndpoint#endpoint_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#project_id MwsVpcEndpoint#project_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.pscEndpointName">pscEndpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#psc_endpoint_name MwsVpcEndpoint#psc_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#psc_connection_id MwsVpcEndpoint#psc_connection_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.serviceAttachmentId">serviceAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#service_attachment_id MwsVpcEndpoint#service_attachment_id}. |

---

##### `endpointRegion`<sup>Required</sup> <a name="endpointRegion" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.endpointRegion"></a>

```java
public java.lang.String getEndpointRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#endpoint_region MwsVpcEndpoint#endpoint_region}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#project_id MwsVpcEndpoint#project_id}.

---

##### `pscEndpointName`<sup>Required</sup> <a name="pscEndpointName" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.pscEndpointName"></a>

```java
public java.lang.String getPscEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#psc_endpoint_name MwsVpcEndpoint#psc_endpoint_name}.

---

##### `pscConnectionId`<sup>Optional</sup> <a name="pscConnectionId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#psc_connection_id MwsVpcEndpoint#psc_connection_id}.

---

##### `serviceAttachmentId`<sup>Optional</sup> <a name="serviceAttachmentId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.serviceAttachmentId"></a>

```java
public java.lang.String getServiceAttachmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/mws_vpc_endpoint#service_attachment_id MwsVpcEndpoint#service_attachment_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsVpcEndpointGcpVpcEndpointInfoOutputReference <a name="MwsVpcEndpointGcpVpcEndpointInfoOutputReference" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_vpc_endpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference;

new MwsVpcEndpointGcpVpcEndpointInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resetPscConnectionId">resetPscConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resetServiceAttachmentId">resetServiceAttachmentId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPscConnectionId` <a name="resetPscConnectionId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resetPscConnectionId"></a>

```java
public void resetPscConnectionId()
```

##### `resetServiceAttachmentId` <a name="resetServiceAttachmentId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resetServiceAttachmentId"></a>

```java
public void resetServiceAttachmentId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.endpointRegionInput">endpointRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscConnectionIdInput">pscConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscEndpointNameInput">pscEndpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.serviceAttachmentIdInput">serviceAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.endpointRegion">endpointRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscEndpointName">pscEndpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.serviceAttachmentId">serviceAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointRegionInput`<sup>Optional</sup> <a name="endpointRegionInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.endpointRegionInput"></a>

```java
public java.lang.String getEndpointRegionInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `pscConnectionIdInput`<sup>Optional</sup> <a name="pscConnectionIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscConnectionIdInput"></a>

```java
public java.lang.String getPscConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `pscEndpointNameInput`<sup>Optional</sup> <a name="pscEndpointNameInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscEndpointNameInput"></a>

```java
public java.lang.String getPscEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `serviceAttachmentIdInput`<sup>Optional</sup> <a name="serviceAttachmentIdInput" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.serviceAttachmentIdInput"></a>

```java
public java.lang.String getServiceAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `endpointRegion`<sup>Required</sup> <a name="endpointRegion" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.endpointRegion"></a>

```java
public java.lang.String getEndpointRegion();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `pscEndpointName`<sup>Required</sup> <a name="pscEndpointName" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscEndpointName"></a>

```java
public java.lang.String getPscEndpointName();
```

- *Type:* java.lang.String

---

##### `serviceAttachmentId`<sup>Required</sup> <a name="serviceAttachmentId" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.serviceAttachmentId"></a>

```java
public java.lang.String getServiceAttachmentId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.internalValue"></a>

```java
public MwsVpcEndpointGcpVpcEndpointInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a>

---



