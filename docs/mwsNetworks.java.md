# `mwsNetworks` Submodule <a name="`mwsNetworks` Submodule" id="@cdktf/provider-databricks.mwsNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNetworks <a name="MwsNetworks" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks databricks_mws_networks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_networks.MwsNetworks;

MwsNetworks.Builder.create(Construct scope, java.lang.String id)
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
    .accountId(java.lang.String)
    .networkName(java.lang.String)
//  .creationTime(java.lang.Number)
//  .errorMessages(IResolvable)
//  .errorMessages(java.util.List<MwsNetworksErrorMessages>)
//  .gcpNetworkInfo(MwsNetworksGcpNetworkInfo)
//  .id(java.lang.String)
//  .networkId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .vpcEndpoints(MwsNetworksVpcEndpoints)
//  .vpcId(java.lang.String)
//  .vpcStatus(java.lang.String)
//  .workspaceId(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#account_id MwsNetworks#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.networkName">networkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#network_name MwsNetworks#network_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.errorMessages">errorMessages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>></code> | error_messages block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.gcpNetworkInfo">gcpNetworkInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | gcp_network_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#id MwsNetworks#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.networkId">networkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#network_id MwsNetworks#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.vpcEndpoints">vpcEndpoints</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | vpc_endpoints block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.vpcStatus">vpcStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#account_id MwsNetworks#account_id}.

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.networkName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#network_name MwsNetworks#network_name}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.creationTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}.

---

##### `errorMessages`<sup>Optional</sup> <a name="errorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.errorMessages"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>>

error_messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#error_messages MwsNetworks#error_messages}

---

##### `gcpNetworkInfo`<sup>Optional</sup> <a name="gcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.gcpNetworkInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

gcp_network_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#gcp_network_info MwsNetworks#gcp_network_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#id MwsNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.networkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#network_id MwsNetworks#network_id}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}.

---

##### `vpcEndpoints`<sup>Optional</sup> <a name="vpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.vpcEndpoints"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

vpc_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#vpc_endpoints MwsNetworks#vpc_endpoints}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}.

---

##### `vpcStatus`<sup>Optional</sup> <a name="vpcStatus" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.vpcStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages">putErrorMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo">putGcpNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints">putVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetErrorMessages">resetErrorMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetGcpNetworkInfo">resetGcpNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetNetworkId">resetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcEndpoints">resetVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcId">resetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcStatus">resetVpcStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putErrorMessages` <a name="putErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages"></a>

```java
public void putErrorMessages(IResolvable OR java.util.List<MwsNetworksErrorMessages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>>

---

##### `putGcpNetworkInfo` <a name="putGcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo"></a>

```java
public void putGcpNetworkInfo(MwsNetworksGcpNetworkInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---

##### `putVpcEndpoints` <a name="putVpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints"></a>

```java
public void putVpcEndpoints(MwsNetworksVpcEndpoints value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetCreationTime"></a>

```java
public void resetCreationTime()
```

##### `resetErrorMessages` <a name="resetErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetErrorMessages"></a>

```java
public void resetErrorMessages()
```

##### `resetGcpNetworkInfo` <a name="resetGcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetGcpNetworkInfo"></a>

```java
public void resetGcpNetworkInfo()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkId` <a name="resetNetworkId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetNetworkId"></a>

```java
public void resetNetworkId()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetVpcEndpoints` <a name="resetVpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcEndpoints"></a>

```java
public void resetVpcEndpoints()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcId"></a>

```java
public void resetVpcId()
```

##### `resetVpcStatus` <a name="resetVpcStatus" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcStatus"></a>

```java
public void resetVpcStatus()
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MwsNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_networks.MwsNetworks;

MwsNetworks.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_networks.MwsNetworks;

MwsNetworks.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_networks.MwsNetworks;

MwsNetworks.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_networks.MwsNetworks;

MwsNetworks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MwsNetworks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MwsNetworks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MwsNetworks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MwsNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MwsNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessages">errorMessages</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList">MwsNetworksErrorMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfo">gcpNetworkInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference">MwsNetworksGcpNetworkInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpoints">vpcEndpoints</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference">MwsNetworksVpcEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTimeInput">creationTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessagesInput">errorMessagesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfoInput">gcpNetworkInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkIdInput">networkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkNameInput">networkNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpointsInput">vpcEndpointsInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatusInput">vpcStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkId">networkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkName">networkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatus">vpcStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessages"></a>

```java
public MwsNetworksErrorMessagesList getErrorMessages();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList">MwsNetworksErrorMessagesList</a>

---

##### `gcpNetworkInfo`<sup>Required</sup> <a name="gcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfo"></a>

```java
public MwsNetworksGcpNetworkInfoOutputReference getGcpNetworkInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference">MwsNetworksGcpNetworkInfoOutputReference</a>

---

##### `vpcEndpoints`<sup>Required</sup> <a name="vpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpoints"></a>

```java
public MwsNetworksVpcEndpointsOutputReference getVpcEndpoints();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference">MwsNetworksVpcEndpointsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTimeInput"></a>

```java
public java.lang.Number getCreationTimeInput();
```

- *Type:* java.lang.Number

---

##### `errorMessagesInput`<sup>Optional</sup> <a name="errorMessagesInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessagesInput"></a>

```java
public java.lang.Object getErrorMessagesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>>

---

##### `gcpNetworkInfoInput`<sup>Optional</sup> <a name="gcpNetworkInfoInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfoInput"></a>

```java
public MwsNetworksGcpNetworkInfo getGcpNetworkInfoInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkIdInput"></a>

```java
public java.lang.String getNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `networkNameInput`<sup>Optional</sup> <a name="networkNameInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkNameInput"></a>

```java
public java.lang.String getNetworkNameInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcEndpointsInput`<sup>Optional</sup> <a name="vpcEndpointsInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpointsInput"></a>

```java
public MwsNetworksVpcEndpoints getVpcEndpointsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `vpcStatusInput`<sup>Optional</sup> <a name="vpcStatusInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatusInput"></a>

```java
public java.lang.String getVpcStatusInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceIdInput"></a>

```java
public java.lang.Number getWorkspaceIdInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkName"></a>

```java
public java.lang.String getNetworkName();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `vpcStatus`<sup>Required</sup> <a name="vpcStatus" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatus"></a>

```java
public java.lang.String getVpcStatus();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceId"></a>

```java
public java.lang.Number getWorkspaceId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNetworksConfig <a name="MwsNetworksConfig" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_networks.MwsNetworksConfig;

MwsNetworksConfig.builder()
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
    .accountId(java.lang.String)
    .networkName(java.lang.String)
//  .creationTime(java.lang.Number)
//  .errorMessages(IResolvable)
//  .errorMessages(java.util.List<MwsNetworksErrorMessages>)
//  .gcpNetworkInfo(MwsNetworksGcpNetworkInfo)
//  .id(java.lang.String)
//  .networkId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .vpcEndpoints(MwsNetworksVpcEndpoints)
//  .vpcId(java.lang.String)
//  .vpcStatus(java.lang.String)
//  .workspaceId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#account_id MwsNetworks#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkName">networkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#network_name MwsNetworks#network_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.errorMessages">errorMessages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>></code> | error_messages block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.gcpNetworkInfo">gcpNetworkInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | gcp_network_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#id MwsNetworks#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkId">networkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#network_id MwsNetworks#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcEndpoints">vpcEndpoints</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | vpc_endpoints block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcStatus">vpcStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#account_id MwsNetworks#account_id}.

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkName"></a>

```java
public java.lang.String getNetworkName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#network_name MwsNetworks#network_name}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}.

---

##### `errorMessages`<sup>Optional</sup> <a name="errorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.errorMessages"></a>

```java
public java.lang.Object getErrorMessages();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>>

error_messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#error_messages MwsNetworks#error_messages}

---

##### `gcpNetworkInfo`<sup>Optional</sup> <a name="gcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.gcpNetworkInfo"></a>

```java
public MwsNetworksGcpNetworkInfo getGcpNetworkInfo();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

gcp_network_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#gcp_network_info MwsNetworks#gcp_network_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#id MwsNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#network_id MwsNetworks#network_id}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}.

---

##### `vpcEndpoints`<sup>Optional</sup> <a name="vpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcEndpoints"></a>

```java
public MwsNetworksVpcEndpoints getVpcEndpoints();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

vpc_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#vpc_endpoints MwsNetworks#vpc_endpoints}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}.

---

##### `vpcStatus`<sup>Optional</sup> <a name="vpcStatus" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcStatus"></a>

```java
public java.lang.String getVpcStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.workspaceId"></a>

```java
public java.lang.Number getWorkspaceId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}.

---

### MwsNetworksErrorMessages <a name="MwsNetworksErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_networks.MwsNetworksErrorMessages;

MwsNetworksErrorMessages.builder()
//  .errorMessage(java.lang.String)
//  .errorType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#error_message MwsNetworks#error_message}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorType">errorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#error_type MwsNetworks#error_type}. |

---

##### `errorMessage`<sup>Optional</sup> <a name="errorMessage" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#error_message MwsNetworks#error_message}.

---

##### `errorType`<sup>Optional</sup> <a name="errorType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorType"></a>

```java
public java.lang.String getErrorType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#error_type MwsNetworks#error_type}.

---

### MwsNetworksGcpNetworkInfo <a name="MwsNetworksGcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_networks.MwsNetworksGcpNetworkInfo;

MwsNetworksGcpNetworkInfo.builder()
    .networkProjectId(java.lang.String)
    .podIpRangeName(java.lang.String)
    .serviceIpRangeName(java.lang.String)
    .subnetId(java.lang.String)
    .subnetRegion(java.lang.String)
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.networkProjectId">networkProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#network_project_id MwsNetworks#network_project_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.podIpRangeName">podIpRangeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#pod_ip_range_name MwsNetworks#pod_ip_range_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.serviceIpRangeName">serviceIpRangeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#service_ip_range_name MwsNetworks#service_ip_range_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#subnet_id MwsNetworks#subnet_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetRegion">subnetRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#subnet_region MwsNetworks#subnet_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}. |

---

##### `networkProjectId`<sup>Required</sup> <a name="networkProjectId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.networkProjectId"></a>

```java
public java.lang.String getNetworkProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#network_project_id MwsNetworks#network_project_id}.

---

##### `podIpRangeName`<sup>Required</sup> <a name="podIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.podIpRangeName"></a>

```java
public java.lang.String getPodIpRangeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#pod_ip_range_name MwsNetworks#pod_ip_range_name}.

---

##### `serviceIpRangeName`<sup>Required</sup> <a name="serviceIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.serviceIpRangeName"></a>

```java
public java.lang.String getServiceIpRangeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#service_ip_range_name MwsNetworks#service_ip_range_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#subnet_id MwsNetworks#subnet_id}.

---

##### `subnetRegion`<sup>Required</sup> <a name="subnetRegion" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetRegion"></a>

```java
public java.lang.String getSubnetRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#subnet_region MwsNetworks#subnet_region}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}.

---

### MwsNetworksVpcEndpoints <a name="MwsNetworksVpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_networks.MwsNetworksVpcEndpoints;

MwsNetworksVpcEndpoints.builder()
    .dataplaneRelay(java.util.List<java.lang.String>)
    .restApi(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.dataplaneRelay">dataplaneRelay</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#dataplane_relay MwsNetworks#dataplane_relay}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.restApi">restApi</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#rest_api MwsNetworks#rest_api}. |

---

##### `dataplaneRelay`<sup>Required</sup> <a name="dataplaneRelay" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.dataplaneRelay"></a>

```java
public java.util.List<java.lang.String> getDataplaneRelay();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#dataplane_relay MwsNetworks#dataplane_relay}.

---

##### `restApi`<sup>Required</sup> <a name="restApi" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.restApi"></a>

```java
public java.util.List<java.lang.String> getRestApi();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/mws_networks#rest_api MwsNetworks#rest_api}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsNetworksErrorMessagesList <a name="MwsNetworksErrorMessagesList" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_networks.MwsNetworksErrorMessagesList;

new MwsNetworksErrorMessagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get"></a>

```java
public MwsNetworksErrorMessagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>>

---


### MwsNetworksErrorMessagesOutputReference <a name="MwsNetworksErrorMessagesOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_networks.MwsNetworksErrorMessagesOutputReference;

new MwsNetworksErrorMessagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorMessage">resetErrorMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorType">resetErrorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorMessage` <a name="resetErrorMessage" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorMessage"></a>

```java
public void resetErrorMessage()
```

##### `resetErrorType` <a name="resetErrorType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorType"></a>

```java
public void resetErrorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessageInput">errorMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorTypeInput">errorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorType">errorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorMessageInput`<sup>Optional</sup> <a name="errorMessageInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessageInput"></a>

```java
public java.lang.String getErrorMessageInput();
```

- *Type:* java.lang.String

---

##### `errorTypeInput`<sup>Optional</sup> <a name="errorTypeInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorTypeInput"></a>

```java
public java.lang.String getErrorTypeInput();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `errorType`<sup>Required</sup> <a name="errorType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorType"></a>

```java
public java.lang.String getErrorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>

---


### MwsNetworksGcpNetworkInfoOutputReference <a name="MwsNetworksGcpNetworkInfoOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_networks.MwsNetworksGcpNetworkInfoOutputReference;

new MwsNetworksGcpNetworkInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectIdInput">networkProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeNameInput">podIpRangeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeNameInput">serviceIpRangeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegionInput">subnetRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectId">networkProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeName">podIpRangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeName">serviceIpRangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegion">subnetRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkProjectIdInput`<sup>Optional</sup> <a name="networkProjectIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectIdInput"></a>

```java
public java.lang.String getNetworkProjectIdInput();
```

- *Type:* java.lang.String

---

##### `podIpRangeNameInput`<sup>Optional</sup> <a name="podIpRangeNameInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeNameInput"></a>

```java
public java.lang.String getPodIpRangeNameInput();
```

- *Type:* java.lang.String

---

##### `serviceIpRangeNameInput`<sup>Optional</sup> <a name="serviceIpRangeNameInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeNameInput"></a>

```java
public java.lang.String getServiceIpRangeNameInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `subnetRegionInput`<sup>Optional</sup> <a name="subnetRegionInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegionInput"></a>

```java
public java.lang.String getSubnetRegionInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `networkProjectId`<sup>Required</sup> <a name="networkProjectId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectId"></a>

```java
public java.lang.String getNetworkProjectId();
```

- *Type:* java.lang.String

---

##### `podIpRangeName`<sup>Required</sup> <a name="podIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeName"></a>

```java
public java.lang.String getPodIpRangeName();
```

- *Type:* java.lang.String

---

##### `serviceIpRangeName`<sup>Required</sup> <a name="serviceIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeName"></a>

```java
public java.lang.String getServiceIpRangeName();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `subnetRegion`<sup>Required</sup> <a name="subnetRegion" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegion"></a>

```java
public java.lang.String getSubnetRegion();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.internalValue"></a>

```java
public MwsNetworksGcpNetworkInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---


### MwsNetworksVpcEndpointsOutputReference <a name="MwsNetworksVpcEndpointsOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_networks.MwsNetworksVpcEndpointsOutputReference;

new MwsNetworksVpcEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelayInput">dataplaneRelayInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApiInput">restApiInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelay">dataplaneRelay</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApi">restApi</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataplaneRelayInput`<sup>Optional</sup> <a name="dataplaneRelayInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelayInput"></a>

```java
public java.util.List<java.lang.String> getDataplaneRelayInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restApiInput`<sup>Optional</sup> <a name="restApiInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApiInput"></a>

```java
public java.util.List<java.lang.String> getRestApiInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataplaneRelay`<sup>Required</sup> <a name="dataplaneRelay" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelay"></a>

```java
public java.util.List<java.lang.String> getDataplaneRelay();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restApi`<sup>Required</sup> <a name="restApi" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApi"></a>

```java
public java.util.List<java.lang.String> getRestApi();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.internalValue"></a>

```java
public MwsNetworksVpcEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---



